var express = require('express');
var cors = require('cors');
var app = express();

var BodyParser = require('body-parser'); //middle
app.use(BodyParser.urlencoded({
	extended: true
}));

app.use(BodyParser.json());

var todos = require('./server/routers/todos.js');

app.use(todos);

app.use(cors());

app.get('api/todos/:id', function(req, res, next){
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.listen(3000, function(){
  console.log('CORS-enabled web server listening on port 3000');
});

//app.listen(3000);

//app.listen(3000);
