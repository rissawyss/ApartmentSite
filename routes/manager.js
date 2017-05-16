var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/passport');

function findAllCustom(table){
    db.table.findAll().then(function(rawDBdata){
        // res.render(viewName, rawDBdata);
        res.json(rawDBdata);

    });
}

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
router.get('/tenants', function(req, res, next) {
    console.log('hit tenant');
    db.Tenant.findAll().then(function(GoldieHawn){
    res.render('tenants', {GoldieHawn});
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
        db.Prospect.findAll().then(function(GoldieHawn){
        res.render('manager', {GoldieHawn});
        });
});

router.get('/contractors', function(req, res, next) {
        db.Contractor.findAll().then(function(GoldieHawn){
            res.render('manager', {GoldieHawn});
        });

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