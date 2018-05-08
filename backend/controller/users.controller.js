var mongoose = require('mongoose');
var userModel = mongoose.model('User');

/*
 * POST /book to save a new book.
 */
module.exports.create = function(req, res) {
	
	var newBook = new Book(req.body);
	newBook.save((err,book) => {
		if(err) {
			res.status(201);
			res.send(err);
			res.json({message: "User successfully not added!", book });
		}
		else { //If no errors, send it back to the client
			res.status(200);
			res.json({message: "User successfully added!", book });
		}
	});
};


