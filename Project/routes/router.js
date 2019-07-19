var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('router');
});

router.get('/user', function(req, res, next) {
  res.render('text')
});

module.exports = router;
