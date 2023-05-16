const router = require('express').Router();
const search = require('./search');

//do not need to include . when adding folder routes
router.use("/search", search);
const users = require('./users');

router.use("/users", users);

module.exports = router;
