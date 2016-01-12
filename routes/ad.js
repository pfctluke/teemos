var express = require('express');
var router = express.Router();

/* GET ad page */
router.get('/ad', function(req, res) {
  res.render('ad.ejs');
});

module.exports = router;
