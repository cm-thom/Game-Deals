const router = require('express').Router();
const search = require('./search');
const products = require('./products')
//do not need to include . when adding folder routes
router.use("/search", search);
const users = require('./users');

router.use("/users", users);


router.use("/products", products);
module.exports = router;


