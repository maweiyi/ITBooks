var express = require('express');
var Operatedata = require('../models/model');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var opearData = new Operatedata();

  opearData.findData();

  res.render('index');

});


router.get('/test', function (req, res, next) {
  res.render('test2', {ps: 15});
})

module.exports = router;
