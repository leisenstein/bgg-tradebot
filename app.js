var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port =  3000;
var hostname = '127.0.0.1';
var services = require('./services/Services');
var app = express();

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false })); 


// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index', {title: 'Customers'});
});

app.get('/tradebot/:zipcode/:range', function(req, res) {
    
    var zip = req.params.zipcode;
    var dist = req.params.range;
    console.log('Search in zipcode: ' + zip + ' within ' + dist + ' miles');


    services.getTradeList(zip, dist, function(result) {
        console.log('RESULT: ' + result);
    });
    res.send('Search in zipcode: ' + zip + ' within ' + dist + ' miles!');
    
});










app.listen(port, hostname, () => {
    console.log('Server started on port ' + port + '....')
});
    
console.log('Welcome to Dilbot 0.1');
exports = module.exports = app;
