var express = require('express');
var router = express.Router();
// var db = requrire('../models');

/* GET home page. */
router.get('/tenants', function(req, res, next) {
  res.render('index', { title: 'manager page' , message: 'And to the Jungle'});
});

router.post('/', function(req, res, next){
	res.json();
});

module.exports = router;
