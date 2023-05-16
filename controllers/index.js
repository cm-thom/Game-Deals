const router = require('express').Router();
const search = require('./search');

//do not need to include . when adding folder routes
router.use("/search", search);

router.get('/', (req, res) => {
    res.render('homepage', {});
});

module.exports = router;
