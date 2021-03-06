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
    db.Tenant.findAll({
        where: {
            soft_delete: false

        }
    }).then(function(tenantsData) {
        res.render('manager', { tenantsData });
    });
});

// testing route
router.get('/testing/:id', function(req, res, next) {
    db.WorkOrder.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(workordersData) {
        console.log(workordersData);
        res.render('workorder_mgr', { workordersData });
    });

});

// GET 2 ) get work orders
router.get('/workorders/:id?', function(req, res, next) {
    if (req.params.id) {
        db.WorkOrder.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(workordersData) {
            // console.log(workordersData.dataValues);
            // workordersData = {request:workordersData.dataValues}
            // workordersData = workordersData.request;
            console.log(workordersData);
            res.render('workorder_mgr', { workordersData });
        });
    } else {
        db.WorkOrder.findAll({
            where: {
                soft_delete: false
            }
        }).then(function(workordersData) {
            console.log('second one never hits if the above hits');
            res.render('manager', { workordersData });
        });
    }
});

// GET 3) get applicants
router.get('/applicants', function(req, res, next) {
    db.Applicant.findAll({
        where: {
            soft_delete: false

        }
    }).then(function(applicantsData) {
        res.render('manager', { applicantsData });

    });
});

// GET 4) get prospects
router.get('/prospects', function(req, res, next) {
    db.Prospect.findAll({
        where: {
            soft_delete: false

        }
    }).then(function(prospectsData) {
        res.render('manager', { prospectsData });
    });
});

// GET 5) get contractors
router.get('/contractors', function(req, res, next) {
    db.Contractor.findAll({
        where: {
            soft_delete: false

        }
    }).then(function(contractorsData) {
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
router.post('/contractors', function(req, res, next) {
    db.Contractors.create().then(function() {
        res.render('manager');
    });
});

// PUT 1) update tenant
router.post('/tenants/update/:id', function(req, res, next) {
    db.Tenant.update(
        req.body, {
            where: {
                id: req.params.id
            }
        }).then(function() {
        res.json('put 1: req.body test');
    });
});


// PUT 2) update workorder
router.post('/workorders/update/:id', function(req, res, next) {
    db.WorkOrder.update(
        req.body, {
            where: {
                id: req.params.id
            }
        }).then(function() {
        console.log(req.body.date_completed);
        res.render('manager');
    });
});

// PUT 2.5) soft delete
router.put('/workorders/update/:id', function(req, res, next) {
    db.WorkOrder.update(
        req.body, {
            where: {
                id: req.params.id
            }
        }).then(function() {
        res.render('manager');
    });
});

// PUT 3) update applicant
router.post('/applicants/update/:id', function(req, res, next) {
    db.Applicant.update(
        req.body, {
            where: {
                id: req.params.id
            }
        }).then(function() {
        res.render('manager');
    });
});

// PUT 4) update prospect
router.post('/prospects/update/:id', function(req, res, next) {
    db.Prospect.update(
        req.body, {
            where: {
                id: req.params.id
            }
        }).then(function() {
        res.render('manager');
    });
});

// PUT 5) update contractor
router.post('/contractors/update/:id', function(req, res, next) {
    db.Contractor.update(
        req.body, {
            where: {
                id: req.params.id
            }
        }).then(function() {
        res.render('manager');
    });
});

// DELETE 1) delete tenant
router.get('/tenants/delete/:id', function(req, res, next) {
    db.Tenant.update({
        soft_delete: true,
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/manager/tenants');
    });
});

// DELETE 2) delete workorder
router.get('/workorders/delete/:id', function(req, res, next) {
    db.WorkOrder.update({
        soft_delete: true,
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/manager/workorders');
    });
});

// DELETE 3) delete applicant 
router.get('/applicants/delete/:id', function(req, res, next) {
    db.Applicant.update({
        soft_delete: true,
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/manager/applicants');
    });
});

// DELETE 4) delete prospect
router.get('/prospects/delete/:id', function(req, res, next) {
    //run burger.js logic of deleteOne(table,id,callback)
    db.Prospect.update({
        soft_delete: true,
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/manager/prospects');
    });
});

// DELETE 5) delete contractor
router.get('/contractors/delete/:id', function(req, res, next) {
    db.Contractor.update({
        soft_delete: true,
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/manager/contractors');
    });
});

module.exports = router;
