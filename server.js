var express = require('express');
var app = express();


var BodyParser = require('body-parser'); //middle
app.use(BodyParser.urlencoded({
	extended: true
}));

app.use(BodyParser.json());

var users = require('./server/routers/users.js');

app.use(users);



app.listen(3000);

//app.listen(3000);
