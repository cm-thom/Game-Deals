const User = require ('./User');
const Products = require('./Products');

//put associations here once approved
<<<<<<< HEAD
//User.hasMany(Products, {
  //  foreignKey: "user_id"
//});

//Products.belongsTo(User, {
 //  foreignKey: 'user_id'
//});

=======
>>>>>>> 0d066e7c62748e4b82ac7efbfa1874f7cb9a0d6d

//don't forget to export associations
module.exports = { User, Products };