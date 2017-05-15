var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next){
	res.render('tenants');
});

router.get('/:tenant?', function(req, res, next){
	// if (req.params.tenant){
	// 	db.Tenant.findAll({
	// 		where:{
	// 			name: req.params.tenant

	// 		}
	// 	}).then(function(results){
	// 		res.json(results);
	// 	});
	// }
});

router.get('/workorders/:wrkOrd?', function(req, res, next) {
	// view with unit workorders
	
  res.render('tenants');
});

router.post('/workorders', function(req, res, next){
	// update view to reflect workorder created
	res.render('tenants');
});

module.exports = router;
