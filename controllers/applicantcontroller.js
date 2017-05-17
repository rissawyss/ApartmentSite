var db = require('../models');
var express = require('express');
var passport = require('../config/passport');


exports.applicant_create_post = function(req, res, next){
	// db.Applicant.create(req.body).then(function(applicantData){
		res.json('where should you go from here you have submitted your application, thank you');
		// res.redirect('/');
	// });

};

exports.applicant_create_get = function(req, res, next){
	res.render('applicant');
};