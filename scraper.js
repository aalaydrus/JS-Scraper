// A Web Scraper made with Node.JS and the framework puppeteer

// Developed by: 
// Syed Fadlie Chaidir Alaydrus
// 101737192
// Bachelor of Computer Science
// Swinburne University of Technology

const puppeteer = require('puppeteer');
const fs = require('fs-extra');

(async function main() {
	try{

		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36');
		//act as a user agent to avoid bot detection

		await page.goto('https://www.9news.com.au/melbourne'); 	//website for 9news Melbourne

		// await page.$ 	//similar to document.querySelector which is getting a single element
		// await page.$$ 	//similar to the code above but instead it gets all

		await page.waitForSelector('.story__details');			//waits for the headline class to render
		const headlines = await page.$$('.story__details'); 	//selector to detect the section for headline

		await fs.writeFile('out.csv', 'Title,Summary\n');

		//REMEMBER TO AVOID USING A FOREACH WHEN USING ASYN. IF ANYTHING FAILS, IT WILL NOT GET OUT
		//HOWEVER A FOR OF LOOP CAN STILL BE USED WITH ASYN LIKE THE ONE BELOW.
		var num = 0;
		//loop over each news headline
		for (const headline of headlines) {
			//Need to fix the num condition with better selector for story title and summary
			if(num < 10) {
				num += 1;
				const storyTitle = await headline.$eval('h1', h1 => h1.innerText); 		//implicit return for headline title
				const storySum = await headline.$eval('div', div => div.innerText); 	//implicit return for headline summary

				console.log(num, 'Title: ', storyTitle);
				console.log('Content: ', storySum, '\n');
				console.log(' \n');
				await fs.appendFile('out.csv', `"${storyTitle}","${storySum}"\n`);
			}
		}

		console.log('DONE!');


	} catch (e) {
		console.log('our error ', e);
	}
})(); //wrapped in parentheses so that we can call it

