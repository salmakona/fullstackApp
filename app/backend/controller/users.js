var mongoose = require('mongoose');
var userModel = mongoose.model('User');

/*
 * POST to create a new user.
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


/*
 * get to show user.
 */

module.exports.showUser = function(req, res) {

		  userModel.find({}, function(err, users) {
		    res.json(users);
		  });

}

/*authenticate*/


module.exports.authenticate = function(req, res) {

	// find the user
	  userModel.findOne({
	    name: req.body.name
	  }, function(err, user) {

	  		//res.json(user);
	   	  	if (err) throw err;
		    if (!user) {
		      res.json({ success: false, message: 'Authentication failed. User not found.' });
		    } else if (user) {

		      // check if password matches
		      if (user.password != req.body.password) {
		        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
		      } else {

			    // if user is found and password is right
			    // create a token with only our given payload
			    // we don't want to pass in the entire user since that has the password
			    // const payload = {
			    //   admin: user.admin 
			    // };
			     //    var token = jwt.sign(payload, app.get('superSecret'), {
			     //      expiresInMinutes: 1440 // expires in 24 hours
			     //    });
		        // return the information including token as JSON
		        res.json({
		          success: true,
		          message: 'your valid user, Enjoy your token!',
		          token:  user._id
		        });
		      }   
    	}

  });

}





