Reader = require("./Reader");
Send_data = require("./Send_data");
var express = require('express');
var reader = new Reader();
var http = require('http');
var app = express();
var fs = require('fs');

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function (req, res) {
    res.render('index', {layout:false});
});

app.get('/socket.io/socket.io.js', function (req, res) {
    fs.readFile('/PROJECT_HOME/node_modules/socket.io/lib/socket.io.js', function (error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        }
        else {
            res.writeHead(200, { 'Content-Type':'text/javascript' });
            res.end(content, 'utf-8');
        }
    });
});

var server = http.createServer(app).listen(3000);
var send_data = new Send_data(server);

var reader= new Reader();
reader.databaseR.addListener('data', function(data){
    console.log();

        send_data.write([data[1],data[2],data[0]]);
        send_data.send();

});

