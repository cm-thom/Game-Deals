const express = require('express');
const path = require("path");
const PORT = 3001;
const app = express();
const controllers = require('./controllers')
const sequelize = require('./config/connection');

app.use(controllers);


app.listen(PORT, () => {
    console.log('Hey Guys')
});

