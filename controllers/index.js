const router = require('express').Router();
const search = require('./search');
const users = require('./users');


//do not need to include . when adding folder routes
router.use("/search", search);


router.use("/users", users);

module.exports = router;