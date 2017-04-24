var express = require('express');


var bodyParser = require('body-parser');



// create the app object
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// middle ware
app.use(bodyParser.json());


module.exports = app;
