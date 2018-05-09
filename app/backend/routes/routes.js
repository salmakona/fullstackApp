// create a new express router
const express      = require('express'),
  router           = express.Router(),
  usersController = require('../controller/users');

// export router
module.exports = router;
router.post('/users/create',    usersController.create);
router.get('/users',    usersController.showUser);
router.post('/users/auth',    usersController.authenticate);
