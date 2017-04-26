// this file creates the express application

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var index = require('./routes/index');


// create the app object
// this object has key value pairs some of which we will be setting
var app = express();

// view engine setup
// set 'views' value to specify the folder where templates will be stored
app.set('views', path.join(__dirname, 'views'));
// set the 'view engine' value to 'pug'
app.set('view engine', 'pug');

// app.use does middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(cookieParser());


app.use('/', index);
// app.use('/users', users);
// needs some app.get

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});








// this line allows the express object to be imported by /bin/www
module.exports = app;
