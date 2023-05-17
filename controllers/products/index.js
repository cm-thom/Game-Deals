const router = require('express').Router();
const {Products} = require ('../../models');

//localhost/
router.post('/new-product', async (req,res) => {

    const {name: productName,
         price: productPrice, 
         console: consoleType,
         description: productDescription,
         viewCount: productViews,
         genre: productGenre,
         available: productAvalible
        } = (req.body);

        const productData =  await Products.create({
        name: productName,
        price: productPrice, 
        console: consoleType,
        description: productDescription,
        viewCount: productViews,
        genre: productGenre,
        available: productAvalible}) ;
        res.json(productData)
})









module.exports = router;