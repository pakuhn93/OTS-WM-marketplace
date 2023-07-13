require('dotenv').config(); // keeps certain information hidden from public entities

const express = require('express'); // server hosting module
const { join } = require('path');
const session = require('express-session'); // keeps track of session information, such as cookies
const exphbs = require('express-handlebars'); // ties front-end and back-end together

// need this to start the express server
const app = express();

const sequelize = require('/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// enables tracking of sessions and stores them into mySQL
const days = 7; // how many days cookies are stored per session

app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: days * 24 * 60 * 60 * 1000, // in milliseconds
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}));

// START handlebars boiler plate
const hbs = exphbs.create({}); // looks similar to express initialization

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// END handlebars boiler plate

// enables the use of the public folder for our application
app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// our routes will get indexed here
app.use(require('./controllers'));

// starts the mySQL server then starts the express server
sequelize.sync({ force: false })
    .then(() => app.listen(process.env.PORT || 3001))
    .catch(err => console.error(err));