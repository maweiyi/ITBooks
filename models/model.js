/**
 * Created by maweiyi on 12/15/15.
 */

var mongoose = require('../node_modules/mongoose');
var Book = require('./book_model.js');



function connectData() {

    mongoose.connect('mongodb://localhost/itbooks');

    this.db = mongoose.connection;
    this.db.on('error', console.error.bind(console, 'connection error:'));
    this.db.once('open', function (callback) {
        // yay!
        //mongoose.connection.close();
    });

    this.findData = function() {
        Book.find({'bookCategory': 'iOS'}, function (err, bookTitle) {
            console.log(bookTitle);


        });
    };
}



module.exports = connectData;





