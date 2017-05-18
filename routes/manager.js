var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/passport');

var manager_controller = require('../controllers/managercontroller');

// GET 0)
router.get('/', function(req, res, next) {
    res.render('manager');
});

// GET 1) get tenant
router.get('/tenants/:id?', function(req, res, next) {
    console.log('hit tenant');
    if (req.params.id) {
        db.Tenant.findOne({
            where: {
                id: req.params.id
            },
            include: [db.WorkOrder]
        }).then(function(dbTenant) {
            res.json(dbTenant);
        });
    }
    db.Tenant.findAll().then(function(tenantsData) {
        res.render('manager', { tenantsData });
    });
});

// GET 2 ) get work orders
router.get('/workorders/:id?', function(req, res, next) {
    if(req.params.id){
        db.WorkOrder.findOne({
            where: {
                id:req.params.id
         }}
        ).then(function(workordersData){
            // res.json(workordersData);
            res.render('workorder_mgr', {workordersData});
        });
    }else{
    db.WorkOrder.findAll().then(function(workordersData) {
        console.log(workordersData);
        res.render('manager', {workordersData});
    });
    }
});

// GET 3) get applicants
router.get('/applicants', function(req, res, next) {
    db.Applicant.findAll().then(function(applicantsData) {
        res.render('manager', { applicantsData });

    });
});

// GET 4) get prospects
router.get('/prospects', function(req, res, next) {
    db.Prospect.findAll().then(function(prospectsData) {
        res.render('manager', { prospectsData });
    });
});

// GET 5) get contractors
router.get('/contractors', function(req, res, next) {
    db.Contractor.findAll().then(function(contractorsData) {
        res.render('manager', { contractorsData });
    });

});

// POST 1) post new tenant
router.post('/tenants', function(req, res, next) {
    db.Tenant.create().then(function() {
        res.render('manager');
    });
    // res.render('manager');
});

// POST 2) post new workorder
router.post('/workorders', function(req, res, next) {
    db.WorkOrder.create().then(function() {
        res.render('manager');
    });
});

// POST 3) post new applicant
router.post('/applicants', function(req, res, next) {
    res.render('manager');
});

// POST 4) post new prospect
router.post('/prospects', function(req, res, next) {
    db.Prospect.create({
        name: req.body.name,
        last_name: req.body.last
    }).then(function() {
        res.render('manager');
    });
});

// POST 5) post new contractor
router.post('/contractors', function(req, res, next){
    db.Contractors.create().then(function() {
        res.render('manager');
    });
});

// PUT 1) update tenant
router.put('/tenants/update/:id', function(req, res, next){
    db.Tenant.update(
        req.body,
        {
        where:{
            id: req.params.id
        }
    }).then(function(){
        res.json('put 1: req.body test');
    });
});


// PUT 2) update workorder
router.put('/workorders/update/:id', function(req, res, next){
    db.WorkOrder.update(
        req.body,
        {
        where:{
            id: req.params.id
        }
    }).then(function(){
        res.render('manager');
    });
});

// PUT 3) update applicant
router.put('/applicants/update/:id', function(req, res, next){
    db.Applicant.update(
        req.body,
        {
        where:{
            id: req.params.id
        }
    }).then(function(){
        res.render('manager');
    });
});

// PUT 4) update prospect
router.put('/prospects/update/:id', function(req, res, next) {
    db.Prospect.update(
        req.body,
        {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.render('manager');
    });
});

// PUT 5) update contractor
router.put('/contractors/update/:id', function(req, res, next){
    db.Contractor.update(
        req.body,
        {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.render('manager');
    });
});

// DELETE 1) delete tenant
router.get('/tenants/delete/:id', function(req, res, next){
    db.Tenant.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/manager/tenants');
    });
});

// DELETE 2) delete workorder
router.get('/workorders/delete/:id', function(req, res, next){
    db.WorkOrder.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/manager/workorders');
    });
});

// DELETE 3) delete applicant 
router.get('/applicants/delete/:id', function(req, res, next){
    db.Applicant.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(){
        res.redirect('/manager/applicants');
    });
});

// DELETE 4) delete prospect
router.get('/prospects/delete/:id', function(req, res, next) {
    //run burger.js logic of deleteOne(table,id,callback)
    db.Prospect.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/manager/prospects');
    });
});

// DELETE 5) delete contractor
router.get('/contractors/delete/:id', function(req, res, next){
    db.Contractor.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/manager/contractors');
    });
});

module.exports = router;
