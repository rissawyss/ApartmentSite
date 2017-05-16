var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/passport');

router.get('/api/:managerQuery', function(req, res, next){
    console.log(req.params.managerQuery);

    // function
    switch(req.params.managerQuery){
    case 'prospectsData':
        console.log('prospector data');
        db.Prospect.findAll().then(function(rawDBdata){
            res.json(rawDBdata);
            // res.redirect('/manager');
        });
        break;
    case 'contractorsData':
        console.log('contractor data');
        db.Contractor.findAll().then(function(rawDBdata){
            res.json(rawDBdata);   
        });
        break;
    case 'tenantsData':
        console.log('tenant data');
        db.Tenant.findAll().then(function(rawDBdata){
            res.json(rawDBdata);
        });
        break;
    }


});

router.get('/', function(req, res, next){
    res.render('manager');
});


// get tenant
router.get('/tenants/:date?', function(req, res, next) {
    if(req.params.date){
        db.Tenant.findAll({
            limit: 10,
            order: [['lease_start', 'DESC']]
        }).then(function(GoldieHawn){
            // res.render('manager', {GoldieHawn});
            res.json(GoldieHawn);
        });
    }
    console.log('hit tenant');
    db.Tenant.findAll().then(function(GoldieHawn){
    res.render('manager', {GoldieHawn});
    // res.json(GoldieHawn);
    });
});

// get work orders
router.get('/workorders', function(req, res, next){
    db.WorkOrder.findAll().then(function(workordersData){
        res.render('manager', {workordersData});
    });
});

// get applicants
router.get('/applicants', function(req, res, next) {
    db.Aplicant.findAll({}).then(function(applicantsData){
        var managerObj = {key: 'val',
                          key2: 'val2',
                          key3: 'val3'};
    res.render('manager', applicantsData);


    });
});

// get prospects
router.get('/prospects', function(req, res, next) {
        db.Prospect.findAll().then(function(prospectsData){
        res.render('manager', {prospectsData});
        });
});

// get contractors
router.get('/contractors', function(req, res, next) {
        db.Contractor.findAll().then(function(contractorsData){
            res.render('manager', {contractorsData});
        });

});

// create new tenant
router.post('/tenants', function(req, res, next) {
    db.Tenant.create({
    }).then(function(){
        res.redirect('/manager');
    });
    // res.render('manager');
});
// create new applicant
router.post('/applicants', function(req, res, next) {
    // res.render('manager');
});

// create new prospect
router.post('/prospects', function(req, res, next) {
    db.Prospect.create({
        name: req.body.name,
        last_name: req.body.last
    }).then(function(){
        // res.redirect('/managers')
    });
});

// create new workorder
router.post('/workorders', function(req, res, next){
    db.WorkOrder.create({
    }).then(function(){
        res.redirect('/manager');
    });
});


// update prospect
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

// delete prospect
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