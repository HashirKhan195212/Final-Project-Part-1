var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET about us page. */
router.get('/aboutus', function(req, res, next) {
  res.render('index', { title: 'About Us' });
});
/* GET product page. */
router.get('/product', function(req, res, next) {
  res.render('index', { title: 'Product' });
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
/* GET contact us page. */
router.get('/contactus', function(req, res, next) {
  res.render('index', { title: 'Contact Us' });
});

module.exports = router;
