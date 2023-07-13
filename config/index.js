// ***This file needs to be named index.js or the server won't start.***

require('dotenv').config();
const Sequelize = require('sequelize');

// checks to see if server is hosted via url or locally
const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;