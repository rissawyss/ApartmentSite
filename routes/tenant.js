var express = require('express');
var router = express.Router();
var db = require('../models');

var tenant_controller = require('../controllers/tenantcontroller');


router.get('/:tenantID?', tenant_controller.tenant_workorderview_get);


module.exports = router;
