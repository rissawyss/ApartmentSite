var db = require('../models');
var express = require('express');
var passport = require('../config/passport');


exports.workorder_create_get = function(req, res, next){
	if(req.params.residentID){
		res.redirect('/');
		// res.json('hello ' + req.params.residentID);
		// console.log('database id ' + req.params.residentID);
		return;
	}
	res.render('workorder', function(err, html){
		if(err){
			if(err.message.indexOf('Failed to lookup view') !== -1){
				return res.json('workorder.handlebars was not found in views directory');
			}
			throw err;
		}
		res.send(html);
	});
};

exports.resident_workorderview_get = function(req, res, next){
		console.log(req.params.residentID);
		res.render('do a query for specific residents work order for the manager');
};

exports.workorder_create_post = function(req, res, next){
  db.WorkOrder.create(req.body).then(function(residentWorkorder){
  	res.json('check the db for added work orders');
  });
};


