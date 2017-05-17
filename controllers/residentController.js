var db = require('../models');
var express = require('express');
var passport = require('../config/passport');


exports.workorder_create_get = function(req, res, next){
	if(req.params.residentID){
		res.render('/');
		// res.json('hello you have reached the server and back' + req.params.residentID);
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
		res.json('do a query for specific residents work order for the manager');
};

exports.workorder_create_post = function(req, res, next){
  db.WorkOrder.create(req.body).then(function(residentWorkorder){
  	res.redirect('/resident');
  });
};


