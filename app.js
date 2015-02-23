/**
 * New node express app
 */
var express = require('express');
var app = express();


app.get('/', function(request, response) {
    response.send('OK');
});

app.listen(3000, function() {
    console.log('Server listening on port %d', 3000);
});
