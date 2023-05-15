const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // THIS IS THE NORMAL SEQUELIZE CALL TO CONNECT TO MY DATABASE IN MY COMPUTER. 
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        'Zm90517!', 
        {
            host: '127.0.0.1',
            dialect: 'mysql',
            port: 3306 //THIS IS WHERE MY DATABASE LIVES IN MY COMPUTER. 
        }
    )
};

module.exports = sequelize;