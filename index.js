const fetch = require('node-fetch');
const http = require('http');
const fs = require('fs');

const myport = parseInt(process.env.PORT) || 8080;
// const myport = 2021;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    fetch('https://restcountries.eu/rest/v2/name/Armenia', {
        method:'GET',
        headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(res => res.json())
    // .then(data => res.end(data[0]['flag']))
    // .then(data => res.end( '<a href="' +data[0]['flag']+ '"> ARMENIAN FLAG </a>') )
    .then(data => res.end( '<a href="' +data[0]['flag']+ '"> '+data[0]['flag']+' </a>') )

}).listen(myport);

/*
fetch('https://restcountries.eu/rest/v2/name/Armenia', {
    method:'GET',
    headers: {"Content-type": "application/json;charset=UTF-8"}

})
    .then(res => res.json())
    .then(data => console.log(data[0]['flag']))
*/






