const User = require ('./User');
const Products = require('./Products');

//put associations here once approved
<<<<<<< HEAD
User.hasMany(Products, {
    foreignKey: 'user_id'
});
=======
<<<<<<< HEAD
//User.hasMany(Products, {
  //  foreignKey: "user_id"
//});

//Products.belongsTo(User, {
 //  foreignKey: 'user_id'
//});

=======
>>>>>>> 0d066e7c62748e4b82ac7efbfa1874f7cb9a0d6d
>>>>>>> c26f843e824af15305bb35496d31d9bac4abde1b

Products.belongsTo(User, {
    foreignKey: 'user_id'
});
//don't forget to export associations
module.exports = { User, Products };