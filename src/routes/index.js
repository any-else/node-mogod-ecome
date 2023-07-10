'use strict';
const User = require('./user.route');
const router = (app) => {
  User(app);
};

module.exports = router;
