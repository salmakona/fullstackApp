// create a new express router
const express      = require('express'),
  router           = express.Router(),
  usersController = require('../controller/users');

// export router
module.exports = router;
router.post('/users/create',    usersController.create);