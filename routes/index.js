var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
	// renderObj = { title: 'Landing Appartment Express' , message: 'And to the Jungle'};
  res.render('index');
});

router.post('/prospect', function(req, res, next){
	db.Prospect.create(req.body).then(function(prospectData){
		res.json(applicantData);
	});
});

module.exports = router;
