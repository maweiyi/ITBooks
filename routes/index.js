var express = require('express');
var router = express.Router();
/* GET home page. */


//Mobile API
router.get('/api/selection', function(req, res, next) {

  console.log(req.query.id);


  req.bookModels.execPageQuery(parseInt(req.query.id), 10, function (err, books) {
    if (err) {
      return next(err);
    } else {
      res.send(JSON.stringify(books));
    }
  });

});

router.get('/api/discover', function (req, res, next) {

});


router.get('/api/search', function (req, res, next) {

});


//Web API
router.get('/', function (req, res, next) {
  var Arrays = [1, 2, 3, 4, 5];
  res.render("index");

});




module.exports = router;


