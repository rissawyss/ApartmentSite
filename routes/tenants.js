var express = require('express');
var router = express.Router();
var db = requrire('../models');


router.get('/tenant/workorders', function(req, res, next) {
	// view with unit workorders
  res.render('tenants');
});

router.post('/tenant/workorders', function(req, res, next){
	// update view to reflect workorder created
	res.render('tenants');
});

module.exports = router;
