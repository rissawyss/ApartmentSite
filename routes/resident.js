var express = require('express');
var router = express.Router();
var db = require('../models');

var resident_controller = require('../controllers/residentcontroller');


router.get('/:residentID?', resident_controller.workorder_create_get);

router.post('/workorders', resident_controller.workorder_create_post);

module.exports = router;


// depending on the resident certian work orders should show up
// router.get('/:residentID?', function(req, res, next){
	// if (req.params.tenant){
	// 	db.Tenant.findAll({
	// 		where:{
	// 			name: req.params.tenant

	// 		}
	// 	}).then(function(results){
	// 		res.json(results);
	// 	});
	// }
// });


// router.post('/workorders', function(req, res, next) {
// 	// res.json('thank you ');
// 	db.WorkOrder.create(req.body).then(function(residentWorkorder){
// 		res.redirect('/resident');
// 	});
// });




