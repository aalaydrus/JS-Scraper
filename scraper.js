// A Web Scraper made with Node.JS and the framework puppeteer

// Developed by: 
// Syed Fadlie Chaidir Alaydrus
// 101737192
// Bachelor of Computer Science
// Swinburne University of Technology

const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const Sentiment = require('sentiment');
const csvtojson = require('csvtojson');

var sment = new Sentiment();
var csvFilePath = 'out.csv';

(async function main() {
	try{

		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();
		page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36');
		//act as a user agent to avoid bot detection

		await page.goto('https://www.9news.com.au/melbourne'); 	//website for 9news Melbourne

		await fs.writeFile('out.csv', 'NewsTitle,NewsSummary,SentimentScore,SentiPositive,SentiNeg,NewsURL\n'); //(re)initialise CSV file output

		var sentiSum;
		var sentiScore;
		var sentiPos = []; //Both Positive and Negative words will be stored in an array
		var sentiNeg = [];

		//NOTE TO SELF: REMEMBER TO AVOID USING A FOREACH WHEN USING ASYN. IF ANYTHING FAILS, IT WILL NOT GET OUT
		//HOWEVER A FOR OF LOOP CAN STILL BE USED WITH ASYN LIKE THE ONE BELOW.

		//loop over each news headline, needs a better iteration method
		for (let i = 0; i < 10; i++) {

			await page.goto('https://www.9news.com.au/melbourne');
			await page.waitForSelector('a.story__media__link', { timeout: 9000 });	//waits for the headline class to render
			await page.waitForSelector('.story__details', { timeout: 9000 });	//waits for the headline class to render
			const headlines = await page.$$('.story__details');		//selector to detect the section element for headline
			const links = await page.$$('article.story-block');		//selector to detect links for each news
			
			const headline = headlines[i];	
			const link = links[i];

			const newsTitle = await headline.$eval('h1', h1 => h1.innerText); 		//implicit return for headline title
			const newsContent = await headline.$eval('div', div => div.innerText); 	//implicit return for headline summary
			const newsURL = await link.$eval('a', a => a.href); 					//implicit return for URL for news summary

			sentiSum = await sment.analyze(newsContent);	//Perform Sentiment Analysis based on AFFIN
			sentiScore = await sentiSum.score;
			sentiPos = await Array.from(sentiSum.positive);
			sentiNeg = await Array.from(sentiSum.negative);

			console.log(eval(i+1), '. Title: ', newsTitle);
			console.log('Content: ', newsContent, '\n');
			console.log('Sentiment Score: ', sentiScore, '\n');
			console.log('Sentiment Positive Word(s): ', sentiPos, '\n');
			console.log('Sentiment Negative Word(s): ', sentiNeg, '\n');
			console.log('URL: ', newsURL, '\n');

			console.log(' \n');
			await fs.appendFile('out.csv', `"${newsTitle}","${newsContent}","${sentiScore}","${sentiPos}","${sentiNeg}","${newsURL}"\n`);
		}

		console.log('DONE!'); //make sure that the iteration is successfully done

		//Conversion from CSV to JSON
		const jsonArray = await csvtojson().fromFile(csvFilePath);
		fs.writeFile('out.json', '');
		fs.appendFile('out.json', JSON.stringify(jsonArray));
		console.log('JSON CONVERSION DONE');


	} catch (e) {
		console.log('The Error is: ', e);
	}
})(); //wrapped in parentheses so that we can call it





