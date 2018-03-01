var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port =  3000;
var hostname = '127.0.0.1';
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


app.listen(port, hostname, () => {
    console.log('Server started on port ' + port + '....')
});
    