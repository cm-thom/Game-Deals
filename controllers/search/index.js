const router = require('express').Router();
const { Products } = require('../../models');

//localhost:3001/search/
router.get('/', (req, res) => {
    res.render('search', {});
});



module.exports = router;