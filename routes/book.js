/**
 * Created by maweiyi on 4/26/16.
 */
var express = require('express');
var router = express.Router();
var bookDetail = require('../controller/book');

router.get('/details',bookDetail.bookDetail);

router.get('/nextpage', bookDetail.nextpage);

router.get('/search', bookDetail.search);

router.get('/count', bookDetail.count);

router.get('/category', bookDetail.searchCount);

router.get('/book', bookDetail.searchByCategory);
module.exports = router;
