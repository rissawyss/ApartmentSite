var express = require('express');
var router = express.Router();
// var db = requrire('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
	// renderObj = { title: 'Landing Appartment Express' , message: 'And to the Jungle'};
  res.render('index');
});

router.post('/', function(req, res, next){
	res.json();
});

module.exports = router;
