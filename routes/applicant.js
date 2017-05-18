var express = require('express');
var router = express.Router();
var db = require('../models');

var applicant_controller = require('../controllers/applicantcontroller');


router.get('/',applicant_controller.applicant_create_get);
router.post('/', applicant_controller.applicant_create_post); 

module.exports = router;
