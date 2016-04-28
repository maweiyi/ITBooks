/**
 * Created by maweiyi on 4/25/16.
 */

var book = require('../models/book');
exports.bookDetail = function (req, res, next) {
    book.findById(req.query.id).exec(function (err, onebook) {

        if (err) {
            next(err);
        } else {
            console.log(onebook);
            res.render("bookDetail", {
                book: onebook
            });
        }

    });

};

exports.nextpage = function (req, res, next) {

    req.bookModels.execPageQuery(req.query.pno, 10, function (err, books) {
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

};

exports.count = function (req, res, next) {
        req.bookModels.count({bookTitle: {$regex: req.query.searchbook}}, function (err, count) {

            console.log("Count", count);

            res.send(JSON.stringify({counts: count}));
        });
};

exports.search = function (req, res, next) {
    if (req.query.pno===undefined) {
        req.bookModels.execPageQuery(1, 10,{bookTitle: {$regex: req.query.searchbook}}, function (err, book) {
            res.render("searAll", {
                book: book.rows,
                key: req.query.searchbook
            })

        });

    } else {
        req.bookModels.execPageQuery(req.query.pno, 10,{bookTitle: {$regex: req.query.searchbook}}, function (err, book) {
            res.render("searAll", {
                book: book.rows,
                key: req.query.searchbook
            })

        });

    }
};

exports.searchCount = function (req, res, next) {
    req.bookModels.count({bookCategory: {$regex: req.query.category, $options: "$i"}}, function (err, count) {
        res.send(JSON.stringify({counts: count}));
    });
};

exports.searchByCategory = function (req, res, next) {

    if (req.query.pno===undefined) {
        req.bookModels.execPageQuery(1, 10,{bookCategory: {$regex: req.query.category, $options: "$i" }}, function (err, book) {
            console.log(book);

            console.log(book.rows);

            res.render("cateindex", {
                book: book.rows,
                key: req.query.searchbook
            })

        });

    } else {

        console.log(req.query.pno);

        req.bookModels.execPageQuery(req.query.pno, 10,{bookCategory: {$regex: req.query.category, $options: "$i"}}, function (err, book) {
            res.render("cateindex", {
                book: book.rows,
                key: req.query.category
            })

        });

    }
};
