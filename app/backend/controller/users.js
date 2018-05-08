var mongoose = require('mongoose');
var userModel = mongoose.model('User');

/*
 * POST /book to save a new book.
 */
module.exports.create = function(req, res) {



	var user = req.body;
	//Creates a new User
	var newUser = new userModel(req.body);
	//Save it into the DB.
	// newBook.save((err,userModel) => {
	// 	if(err) {
	// 		res.send(err);
	// 	}
	// 	else { //If no errors, send it back to the client
	// 		res.json({message: "One User successfully Created!"});
	// 	}
	// });

	//console.log(req.body)
	newUser.save((err,userModel) => {
			if(err){
					console.log(err);
					res.status(400);
					res.json("Failur")

			} else {
				res.status(200);					
				res.json(userModel)
			}
		});
};





