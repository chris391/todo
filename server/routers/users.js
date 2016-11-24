var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017/store';




// create routes for products
// Get, Post

app.get('/store', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('users');

        collection.find({}).toArray(function(err, data) {
            
            res.send(data);
            //res.json(data);
            db.close();
        });
    });
});
app.get('/store/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('users');

        collection.findOne({'_id' : ObjectId(req.params.id)},function(err, data) {
            
            res.send(data);
            //res.json(data);
            db.close();
        });
    });
});

//post route
app.post('/store', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('users');

        collection.insert(req.body, function(err, data) {
            
            res.send({"msg" : "user created"});
            //res.json(data);
            db.close();
        });
    });
});

//update route
app.put('/store/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('users');

        collection.update({'_id' : ObjectId(req.params.id)},{$set:req.body}, function(err, data) {
            
            res.send({"msg" : "user updated"});
            //res.json(data);
            db.close();
        });
    });
});

//delete route
app.delete('/store/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('users');

        collection.remove({'_id' : ObjectId(req.params.id)}, function(err, data) {
            
            res.send({"msg" : "user deleted"});
            //res.json(data);
            db.close();
        });
    });
});

module.exports = app;
