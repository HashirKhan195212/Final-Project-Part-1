// Hashir Khan 100911091
// Afeef Hossain 100923314
// Kapiraj Sivakumar 100817815
var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('Calculate/index', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// exports router
module.exports = router;
