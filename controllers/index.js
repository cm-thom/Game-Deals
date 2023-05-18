const pages = require('./pages');
const router = require('express').Router();
const search = require('./search');


const products = require('./products')

const users = require('./users');


//do not need to include . when adding folder routes
router.use("/search", search);


//do not need to include . when adding folder routes
router.use("/", pages);

router.use("/search", search);

router.use("/users", users);


router.use("/products", products);



module.exports = router;