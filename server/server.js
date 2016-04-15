var express = require("express");
var index = require('./routes/index.js');
var mongoose = require('mongoose');
var users = require('./modules/createTwentyUsers.js');
var userModel = require('../models/userModel.js');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/', index);

var mongoURI = "mongodb://localhost:27017/blueTeam"
var mongodb = mongoose.connect(mongoURI).connection;

//  Server Listener

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port);
});
