var http = require('http');
var port =  3000;
var hostname = '127.0.0.1';

var bggSearchUrl = 'https://boardgamegeek.com/findgamers.php?action=findclosest&country=US&srczip=[ZIPCODE]&maxdist=[MAXDIST]&B1=Submit';
var server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/json');
    res.end('Hello World');

});

server.listen(port, hostname, () => {
    console.log('Server started on port ' + port + '....')
});
    