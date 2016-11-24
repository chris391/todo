var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017/api';






// create routes for products
// Get, Post

app.get('/api/todos', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('todos');

        collection.find({}).toArray(function(err, data) {

            res.send(data);
            //res.json(data);
            db.close();
        });
    });
});
app.get('/api/todos/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('todos');

        collection.findOne({'_id' : ObjectId(req.params.id)},function(err, data) {

            res.send(data);
            //res.json(data);
            db.close();
        });
    });
});

//post route
app.post('/api/todos', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('todos');

        collection.insert(req.body, function(err, data) {

            res.send({"msg" : "todo created"});
            //res.json(data);
            db.close();
        });
    });
});

//update route
app.put('/api/todos/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('todos');

        collection.update({'_id' : ObjectId(req.params.id)},{$set:req.body}, function(err, data) {

            res.send({"msg" : "todo updated"});
            //res.json(data);
            db.close();
        });
    });
});

//delete route
app.delete('/api/todos/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('todos');

        collection.remove({'_id' : ObjectId(req.params.id)}, function(err, data) {

            res.send({"msg" : "todo deleted"});
            //res.json(data);
            db.close();
        });
    });
});

module.exports = app;
