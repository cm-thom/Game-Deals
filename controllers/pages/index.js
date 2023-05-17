const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render('homepage', {});
    //res.redirect('homepage');
})

module.exports = router;