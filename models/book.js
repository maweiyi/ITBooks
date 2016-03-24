/**
 * Created by maweiyi on 12/15/15.
 */
var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    bookCategoryUrls: [String],
    bookLanguage: [String],
    bookDownloadUrl: [String],
    bookAuthor: [String],
    bookPages: [String],
    bookTitle: [String],
    bookImage: [String],
    bookYear: [String],
    bookIsbn: [String],
    bookCategory: [String],
    bookFileSiz: [String],
    bookDescription: [String]
});

module.exports = mongoose.model('Book', bookSchema);
