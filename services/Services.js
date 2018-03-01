var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Services = { }

Services.BaseBGGSearchURL = 'https://boardgamegeek.com/findgamers.php?action=findclosest&country=US&srczip=[ZIPCODE]&maxdist=[MAXDISTANCE]&B1=Submit';


Services.getTradeList = function(zipcode, dist, callback) {
    var baseUrl = Services.BaseBGGSearchURL;
    var url = baseUrl.replace("[ZIPCODE]", zipcode).replace("[MAXDISTANCE]", dist);
    console.log('Final URL: ' + url);
    callback('json results');
}

module.exports = Services;