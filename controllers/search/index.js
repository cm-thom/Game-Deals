const router = require('express').Router();

//localhost:3001/search
router.get('/', (req, res) => {
    res.render('search', {});
})

module.exports = router;