const express = require('express');
// need mysql2 to connect with database
const mysql = require('mysql2');
const sequelize = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});