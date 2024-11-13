var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('Calculate/index', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// exports router
module.exports = router;
