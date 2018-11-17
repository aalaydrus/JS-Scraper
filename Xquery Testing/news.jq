for $x in (
   {
      "NewsTitle":"Man living in ‘glorified cupboard’ after neighbours wall up window",
      "NewsSummary":"Oscar Gordon, 33, said he came home from work about a month ago to see the wall being built outside his bedroom window.",
      "SentimentScore":"0",
      "SentiPositive":"",
      "SentiNeg":"",
      "NewsURL":"https://www.9news.com.au/2018/11/14/17/07/window-bricked-over-council-town-planning-battle"
   },
   {
      "NewsTitle":"Victorian policeman accused of rape fronts court",
      "NewsSummary":"A senior constable has faced a Wangaratta court charged with rape and sexual assault after he was called to a woman’s home over a family violence incident.",
      "SentimentScore":"-12",
      "SentiPositive":"",
      "SentiNeg":"violence,assault,rape,charged",
      "NewsURL":"https://www.9news.com.au/national/2018/11/14/19/44/victorian-policeman-accused-of-rape-fronts-court"
   },
   {
      "NewsTitle":"Family vow to rebuild fruit shop ravaged by fire",
      "NewsSummary":"The devastated owners of a 45-year-old Hawthorn East fruit shop destroyed by fire have vowed to rebuild.",
      "SentimentScore":"-7",
      "SentiPositive":"",
      "SentiNeg":"fire,destroyed,devastated",
      "NewsURL":"https://www.9news.com.au/national/2018/11/14/14/31/fire-rips-through-melbourne-shopping-complex-luscious-affairs-pentaris-quality-fruit-and-vegetables"
   },
   {
      "NewsTitle":"Victim of 'Tinder rapist' slams prosecutors for extending bail",
      "NewsSummary":"The \"Tinder rapist\" on bail after pleading guilty to raping women he met online has had that bail revoked after allegedly sending one of his victims a screenshot of her location.",
      "SentimentScore":"-10",
      "SentiPositive":"",
      "SentiNeg":"victims,guilty,rapist",
      "NewsURL":"https://www.9news.com.au/national/2018/11/14/11/51/glenn-dylan-hartland-tinder-rapist-has-bail-revoked-after-allegedly-taunting-victim"
   },
   {
      "NewsTitle":"Christmas Day terror plotters smirk after being found guilty",
      "NewsSummary":"The group planned to “wage violent Jihad” on innocent people at several Melbourne landmarks on Christmas Day. ",
      "SentimentScore":"-3",
      "SentiPositive":"",
      "SentiNeg":"violent",
      "NewsURL":"https://www.9news.com.au/national/2018/11/14/15/44/men-found-guilty-of-christmas-day-terror-plot-in-melbourne"
   },
   {
      "NewsTitle":"Bourke Street terror victim speaks",
      "NewsSummary":"The young security guard stabbed in the neck during the Melbourne terror attack says the horror made him \"want to protect and serve the public more\".",
      "SentimentScore":"-4",
      "SentiPositive":"protect,want",
      "SentiNeg":"attack,terror,stabbed",
      "NewsURL":"https://www.9news.com.au/national/2018/11/14/17/34/bourke-street-attack-stabbed-security-guard-speaks-out"
   },
   {
      "NewsTitle":"Melbourne to adopt NYC model to combat terrorism",
      "NewsSummary":"Private businesses in Melbourne could soon play a key role in combating terror incidents in the city.",
      "SentimentScore":"-3",
      "SentiPositive":"",
      "SentiNeg":"terror",
      "NewsURL":"https://www.9news.com.au/national/2018/11/14/07/49/victoria-anti-terrorism-new-bollards-being-installed"
   },
   {
      "NewsTitle":"Stolen disabled foal found dead at racing stable",
      "NewsSummary":"A family have found their six-week-old foal “Holly” dead after it was stolen from their racing stable.",
      "SentimentScore":"-3",
      "SentiPositive":"stable",
      "SentiNeg":"stolen,dead",
      "NewsURL":"https://www.9news.com.au/national/2018/11/13/18/04/disabled-newborn-foal-stolen-from-victorian-racing-stable"
   },
   {
      "NewsTitle":"Gunman on the run after shooting outside home",
      "NewsSummary":"Blood has been left splattered on a quiet residential street after a man was shot in Melbourne's south-east.",
      "SentimentScore":"0",
      "SentiPositive":"",
      "SentiNeg":"",
      "NewsURL":"https://www.9news.com.au/national/2018/11/14/07/28/cranbourne-shooting-man-injured-in-drive-by-shooting"
   },
   {
      "NewsTitle":"Man 'emotionless in court' after admitting to murdering girlfriend",
      "NewsSummary":"Shane Robertson, from Melbourne, pleaded guilty to murdering the mother of his two children, Katie Haley.",
      "SentimentScore":"-6",
      "SentiPositive":"",
      "SentiNeg":"murdering,guilty",
      "NewsURL":"https://www.9news.com.au/national/2018/11/08/16/55/shane-robertson-pleads-guilty-to-murdering-girlfriend-in-diggers-rest-melbourne"
   }
)
where {$x.NewsTitle} eq "Bourke Street terror victim speaks"
return {$x.SentimentScore}