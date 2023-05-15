const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('Whatever');
});

module.exports = router;
