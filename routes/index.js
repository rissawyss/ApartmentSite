var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require("../config/passport");


/* GET home page. */
router.get('/', function(req, res, next) {
	// renderObj = { title: 'Landing Appartment Express' , message: 'And to the Jungle'};
  res.render('index');
});


router.post('/prospect', function(req, res, next){
	console.log(req.body);
	//res.json(req.body);
	db.Prospect.create(req.body).then(function(prospectData){
		console.log(req.body);
		res.redirect('/'); // how should we respond to the prospect?
	});
});


router.post('/applicants', function(req, res, next){
	db.Applicant.create(req.body).then(function(applicantsData){
		res.json(applicantsData); // send confirmation 
	});
});

// router.post('/api/tenantLogin', passport.authentication("local"), function(req, res){
// 	res.json('/tenants');
// });

// router.post('/api/managerLogin', passport.authentication("local"), function(req, res){
// 	res.json('/manager');
// });


module.exports = router;
