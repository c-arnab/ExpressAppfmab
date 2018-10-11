'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'FraudMetrix – Fraud analytics for grownups' });
});

module.exports = router;
