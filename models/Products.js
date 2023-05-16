const { Model, DataTypes } = require('sequelize');

const sequelize = require ('../config/connection');

class Products extends Model {};

Products.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    console: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING, //isn't there big string or something? maybe varchar(255) is enough
    },
    viewCount: {
        type: DataTypes.INTEGER,
    },
    genre: {
        type: DataTypes.STRING,
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'products'
});

//add foreign key for primary key user_id
//figure out image storage

module.exports = Products;