// this file creates the express application

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');



// create the app object
// this object has key value pairs some of which we will be setting
var app = express();

// view engine setup
// set 'views' value to specify the folder where templates will be stored
app.set('views', path.join(__dirname, 'views'));
// set the 'view engine' value to 'pug'
app.set('view engine', 'pug');

// app.use does middleware
app.use(bodyParser.json());


// needs some app.get









// this line allows the express object to be imported by /bin/www
module.exports = app;
