const User = require ('./User');
const Product = require('./Products');

User.buysMany(Products, {
    foreignKey: "user_id"
});

Product.belongsTo(User, {
    foreignKey: 'user_id'
})

//don't forget to export associations
module.exports = { User, Products };