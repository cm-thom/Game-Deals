const router = require('express').Router();
const search = require('./search');
<<<<<<< HEAD
const products = require('./products')
=======
const users = require('./users');


>>>>>>> 0d066e7c62748e4b82ac7efbfa1874f7cb9a0d6d
//do not need to include . when adding folder routes
router.use("/search", search);


router.use("/users", users);


router.use("/products", products);
module.exports = router;


