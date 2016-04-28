var express = require('express');
var router = express.Router();
/* GET home page. */


//Mobile API
router.get('/api/selection', function(req, res, next) {

  console.log(req.query.id);


  req.bookModels.execPageQuery(req.query.id, 10, function (err, books) {
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
  var bookDetail;
  req.bookModels.execPageQuery(1, 10, function (err, books) {
    if (err) {
      next(err);
    } else {
      bookDetail = books["rows"];
      console.log(bookDetail[0]["_id"]);

      res.render("index", {
        book: bookDetail
      });
    }
  });
});

router.get('/page', function (req, res, next) {
  req.bookModels.execPageQuery(1, 10, function (err, books) {
    console.log(JSON.stringify({number:books["total"]}));
    res.send(JSON.stringify({number:books["total"]}));
  });

});

module.exports = router;


