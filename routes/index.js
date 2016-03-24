var express = require('express');
var router = express.Router();
/* GET home page. */


//REST API
router.post('/api/selection', function(req, res, next) {

  req.bookModels.execPageQuery(req.params.id, 10, function (err, books) {
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


module.exports = router;


