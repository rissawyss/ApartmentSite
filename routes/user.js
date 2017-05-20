var express = require('express');
var router = express.Router();
var db = require('../models');

var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");


// login
// router.post('/login', passport.authenticate("local"), function(req, res) {
router.post('/login', function(req, res) {
    // console.log(req.body);
    // res.json('mistakenly correct');
    console.log(req.body);
    db.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(function(data) {
        // if(user == req.body.user_name){
        if (!data) {
            res.json('/');
        } else {
            res.json('manager');
        }
        // console.log(data.dataValues.username);
        // }
    });
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    // res.json("/");
});

// register a user
router.post('/signup', function(req, res) {
    db.User.findAll({
        where: { username: req.body.username }
    }).then(function(users) {
        if (users.length > 0) {
            res.json({
                duplicateUser: true
            });
            //At some point, make sure that only one user can be associated with an email.
        } else {
            db.User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }).then(function() {
                res.send({ redirect: '/' });
            });
        }
    });
});


module.exports = router;
