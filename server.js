var express = require('express');
var path = require('path');
var bodyParser = reqiure('body-parser');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var http = require('http');

http.createServer(function(request, response) {
	response.write("lala");
	response.end();

}).listen(1001);
