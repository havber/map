/*jshint node: true*/

"use strict";


var express = require('express'),
    app     = express();


app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.set({'Content-Type': 'text/html'});
    res.sendfile('/index.html');
});

var server = app.listen(3000, function() {
    var host = server.address().address,
        port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
});
