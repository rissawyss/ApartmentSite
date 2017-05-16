var express = require('express');
var router = express.Router();
var db = require('../models');



router.get('/', function(req, res, next) {
	// view with unit workorders
	
  res.render('applicant');
  // res.json('this is going to the application')
});

router.post('/', function(req, res, next){
	console.log('thank you for applying to the cabin');
	res.render('index');
});

module.exports = router;
