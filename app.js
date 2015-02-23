/**
 * New node express app
 */
var express = require('express');
var app = express();


//app.get('/', function(request, response) {
//    response.send('OK');
//});

app.use(express.static('public'));

app.get('/cities', function (request, response) {
    var cities = ['Lotopia', 'Caspiana', 'Indigo'];
    response.json(cities);
});

module.exports = app;


