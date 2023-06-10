
// file name : users.js
//  Name : Jay Joshi
//  Student ID : 301318520
//  Date : 20-02-2023 -->

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
