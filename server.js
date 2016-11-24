var express = require('express');
var app = express();


var BodyParser = require('body-parser'); //middle
app.use(BodyParser.urlencoded({
	extended: true
}));

app.use(BodyParser.json());

var users = require('./server/routers/users.js');
//var products = require('./routers/products.js');



app.use(users);
//app.use(products);


app.listen(3000);
