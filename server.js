var express = require('express');
var app = express();


var BodyParser = require('body-parser'); //middle
app.use(BodyParser.urlencoded({
	extended: true
}));

app.use(BodyParser.json());
/*app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/todo');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type: application/json');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();

});*/


var users = require('./server/routers/users.js');
//var products = require('./routers/products.js');



app.use(users);
//app.use(products);


app.listen(3000);
