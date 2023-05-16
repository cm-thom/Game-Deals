const express = require('express');
const path = require("path");
const PORT = 3001;
const app = express();
const controllers = require('./controllers')
const sequelize = require('./config/connection');



const models = require('./models');

app.use(controllers);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`node server listening on ${PORT}`);
    })
});