// Hashir Khan 100911091
// Afeef Hossain 100923314
// Kapiraj Sivakumar 100817815
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
