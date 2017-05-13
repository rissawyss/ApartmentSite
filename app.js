// this file creates the express application

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require("express-session");
var passport = require("./config/passport");




const app = express(); // create express app object

// app.use does middleware
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


var index = require('./routes/index');
var tenants = require('./routes/tenants');
var manager = require('./routes/manager');

//use handlebars engine as template engine, use 'main' as our base file
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars'); // set the 'view engine'



// set 'views' value to specify the folder where templates will be stored
app.set('views', path.join(__dirname, 'views'));





app.use('/', index);
app.use('/tenants', tenants);
app.use('/manager', manager);
// app.use('/users', users);





app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.send('error');
  // next(err);
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
