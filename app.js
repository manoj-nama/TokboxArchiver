var express = require('express');

var logger = require("morgan");
var bodyParser = require("body-parser");
var app = express();

app.use(logger('dev'));
app.use(bodyParser());
app.set('view engine','ejs');
app.set('views', __dirname + '/public');



app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8888, function () {
	console.log("Server Listening on port", process.env.PORT || 8888);
});