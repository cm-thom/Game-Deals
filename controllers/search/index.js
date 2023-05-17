const router = require('express').Router();
const { Products } = require('../../models');

//localhost:3001/search/
// router.get('/', (req, res) => {
//     res.render('search', {});
// });

router.get('/search/:user-query', (req, res) => {
    //logic to query sql db for :user-query string
});


//in the get request, pass user search variable to the route with :whatever-search, then take as req.param.value and pass to sequelize to query products table


module.exports = router;