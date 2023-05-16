const express = require('express');
const path = require("path");
const controllers = require('./controllers')
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');

const PORT = 3001;
const app = express();

//needed so express can find public (front-end) assets
app.use(express.static('public'));

//you don't need to include this if you don't have helper functions.
// const hbs = exphbs.create({});

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

//needed for POST requests
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

//needed so sequelize can find the models
const models = require('./models');

//needed so express can find the routes
app.use(controllers);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`node server listening on ${PORT}`);
    })
});