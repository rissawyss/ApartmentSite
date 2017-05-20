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
var resident = require('./routes/resident');
var tenant = require('./routes/tenant');
var manager = require('./routes/manager');
var applicant = require('./routes/applicant');

var user = require('./routes/user');

var application_controller = require('./controllers/application_controller');
var users_controller = require('./controllers/users_controller');
var trips_controller = require('./controllers/trips_controller');
var pricing_controller = require('./controllers/pricing_controller');

//use handlebars engine as template engine, use 'main' as our base file
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars'); // set the 'view engine'



// set 'views' value to specify the folder where templates will be stored
app.set('views', path.join(__dirname, 'views'));





app.use('/', index);
app.use('/resident', resident);
app.use('/tenant', tenant);
app.use('/manager', manager);
app.use('/applicant', applicant);
// app.use('/users', users);


// app.use('/', application_controller);
app.use('/users', user);
app.use('/trips', trips_controller);
app.use('/pricing', pricing_controller);


// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   res.send('404');
// next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('500');
// });








// this line allows the express object to be imported by /bin/www
module.exports = app;
