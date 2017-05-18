var db = require('../models');
var express = require('express');
var passport = require('../config/passport');


exports.tenant_workorderview_get = function(req, res, next){
		console.log(req.params.residentID);
		res.json('do a query for specific residents work order for the manager');
};


