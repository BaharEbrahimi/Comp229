
// file name : users.js
//  Name : Fatemeh Ebrahimi
//  Student ID : 301324302
//  Date : 09-06-2023 -->

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
