var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Services = { }

Services.BaseBGGSearchURL = 'https://boardgamegeek.com/findgamers.php?action=findclosest&country=US&srczip=[ZIPCODE]&maxdist=[MAXDISTANCE]&B1=Submit';


Services.getTradeList = function(zipcode, dist, callback) {
    var baseUrl = Services.BaseBGGSearchURL;
    var url = baseUrl.replace("[ZIPCODE]", zipcode).replace("[MAXDISTANCE]", dist);
    var result = 'json results';

    request(url, function(error, res, html) {
        if(error) {
            console.log('ERROR in getTradeList');
        } else {
            $ = cheerio.load(html);
            result = html;
            console.log('Final URL: ' + url);
            
            var a = $('div.username a')[0].getAttribute('href');



            callback(a);
        }
    });



   
}

module.exports = Services;