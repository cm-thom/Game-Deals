const router = require('express').Router();
const { Products } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// localhost:3001/search/

router.get('/', (req, res) => {
    res.render('search', {});
});


router.get('/:userQuery', async (req, res) => {

    try {
      const userQuery = req.params.userQuery;
  
      const products = await Products.findAll({
        where: {
          name: userQuery
        }
      });
  
      const results = products.map((product) =>
        product.get({ plain: true })
        );
      console.log(results);

      res.render('search', {results});
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Internal server error' });
    }
  });



// router.get('/:user-search', async (req, res) => {
//     const { searchInput } = req.query;

//     await Products.findAll({ where: { name: { [Op.like]: '%' + searchInput + '%'}}});
//     res.render('search', {});
// });


module.exports = router;