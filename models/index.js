const User = require ('./User');
const Products = require('./Products');

HEAD
User.buysMany(Products, {
    foreignKey: "user_id"
});

Product.belongsTo(User, {
    foreignKey: 'user_id'
})

//put associations here once approved


//don't forget to export associations
module.exports = { User, Products };