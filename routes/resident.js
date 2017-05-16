var express = require('express');
var router = express.Router();
var db = require('../models');

var resident_controller = require('../controllers/residentcontroller');

router.get('/', resident_controller.workorder_create_get);

// depending on the resident certian work orders should show up
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
	res.json('work order received');
	// db.WorkOrder.create({
	// }).then(function(){
	// 	res.redirect('/tenants');
	// });
});


router.put('/workorders', function(req, res, next){
	res.json('put');
});



router.delete('/workorders/:wrkOrd', function(req, res, next){
	// archive work order
});

module.exports = router;
