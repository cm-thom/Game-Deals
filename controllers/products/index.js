const router = require('express').Router();
const Products = require ('../../models/Products');

//localhost/



router.get('/new-product',(req,res ) => {
    res.render('products-create', {});
})
router.post('/new-product',  (req,res) => {

    

          Products.create({
        name: req.body.productName,
        price: req.body.productPrice, 
        console: req.body.consoleType,
        description: req.body.productDescription,
        viewCount: req.body.productViews,
        genre: req.body.productGenre,
        available: req.body.productAvalible
    }) 
        
.then((newProduct) => {
   res.json(newProduct);
})

})







module.exports = router;