var express = require('express');
var router = express.Router();
var db = requrire('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
	// renderObj = { title: 'Landing Appartment Express' , message: 'And to the Jungle'};
  res.render('index');
});

router.post('/applicants', function(req, res, next){
	db.Applicant.create(req.body).then(function(applicantData){
		res.json(applicantData);
	});
});

module.exports = router;
