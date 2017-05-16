var db = require('../models');
var express = require('express');
var passport = require('../config/passport');



exports.login = function(req, res, next){
  res.render('login', {
    title: 'express login'
  });
};

exports.signin = function(req, res, next){
  res.render('registration', {
    layout: 'main-registration'
  });
};

exports.logout = function(req, res, next){
  req.logout();
  res.redirect('/');
};

exports.signup_get = function(req, res, next){
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

