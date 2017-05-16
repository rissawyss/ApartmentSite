var db = require('../models');
var express = require('express');
var passport = require('../config/passport');


exports.workorder_create_get = function(req, res, next){
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

exports.workorder_create_post = function(req, res, next){
  res.render('registration', {
    layout: 'main-registration'
  });
};

exports.workorde_update_put = function(req, res, next){
  req.logout();
  res.redirect('/');
};

exports.workorder_delete_post = function(req, res, next){
  res.render('applicant', {
    layout: 'main'
  });
};

exports.signup = function(req, res, next){
  db.User.findAll({
    where: {username: req.body.username}
  }).then(function(users){
    if(users.length > 0){
      res.json({
        duplicateUser: true
      });
    }else {
      db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }).then(function(){
        res.send({redirect: '/'});
      }).catch(function(err){
        res.json(err);
      });
    }
  });
};