var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next){
	res.render('tenants');
});

// depending on the tenant certian work orders should show up
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
	db.WorkOrder.create({
	}).then(function(){
		res.render('/tenants')
	})
	res.render('tenants');
});


router.put('/workorders', function(req, res, next){
	res.json('put')
});



router.delete('/workorders/:wrkOrd', function(req, res, next){
	// archive work order
});

module.exports = router;
