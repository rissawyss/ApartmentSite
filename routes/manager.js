var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next){
    res.render('manager');
});


// get tenant
router.get('/tenant', function(req, res, next) {
    db.Tenant.findAll({}).then(function(tenant){
    var formattedObj = {key: 'val',
                        key2: 'val2',
                        key3: 'val3'};
    res.render('manager', formattedObj);
    // res.json(tenant);
    });
});

// get applicants
router.get('/applicants', function(req, res, next) {
    db.Aplicant.findAll({}).then(function(aplicant){
        var managerObj = {key: 'val',
                          key2: 'val2',
                          key3: 'val3'};
    res.render('manager', managerObj);


    });
});

// get prospects
router.get('/prospects', function(req, res, next) {
        db.Prospect.findAll().then(function(prospectData){
        res.render('manager', {prospectData});
        });
});

router.get('/contractors', function(req, res, next) {

});

router.post('/tenant', function(req, res, next) {
    // res.render('manager');
});

router.post('/applicants', function(req, res, next) {
    // res.render('manager');
});

router.post('/prospects', function(req, res, next) {
    db.Prospect.create({
        name: req.body.name,
        last_name: req.body.last
    }).then(function(){
        // res.redirect('/managers')
    });
});

router.put('/prospects/update/:id', function(req, res, next){
    db.Prospect.update({
        updatevalue: 'newvalue'
    },{where:{
        id:req.params.id
    }}
    ).then(function(){
        res.redirect('/managers');
    });
});

router.delete('/prospects/update/:id', function(req, res, next) {
    //run burger.js logic of deleteOne(table,id,callback)
    db.Prospect.destroy(
        {where:{
            id:req.params.id
        }}).then(function(){
            res.redirect('/managers');
        });
});

module.exports = router;
