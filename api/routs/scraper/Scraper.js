/**This file holds a function that conducts the "scraping" according to a boolian parameter sent to it.
 Location of this file is within the api/routs...folders,
 in order to be able to call the following with a path: var scraper = require('./scraper/Scraper');
**/

module.exports = {//so we can call this scraping function from headline.js and subtitle.js
  scrape: function(is_head)
  { 
    var json = [];
    const request = require('request');
    const cheerio = require('cheerio');

    request('https://www.ynet.co.il/home/0,7340,L-8,00.html',(error, response, html) =>{
      if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        var title;
        /*If we wanted to extend the options of this program, we would use a 'switch' he instead of an 'if statment'*/
        is_head? title = $('.subtitle'/*What we called 'headline*/): title = $('.sub-title'/*What we called 'subtitle*/);
        json.push(title.text());
      }
    });
    return json;
  }
};