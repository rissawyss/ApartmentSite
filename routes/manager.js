var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/manager/tenant', function(req, res, next) {
  res.render('manager');
});

router.get('/manager/applicants', function(req, res, next){
	res.render('manager');
});

router.get('/manager/prospects', function(req, res, next){
	res.render('manager');
});

router.get('/manager/contractors', function(req, res, next){
});

router.post('/manager/tenant', function(req, res, next){
	res.render('manager');
});

router.post('/manager/applicants', function(req, res, next){
	res.render('manager');
});

router.post('/manager/prospects', function(req, res, next){
	res.render('manager');
});




module.exports = router;
