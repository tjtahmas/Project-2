/***/
require("dotenv").config(); 
const routes = require('./controllers');
const session = require('express-session');
const express = require('express');
const sequelize = require('./config/connection');
const bodyParser = require('body-parser');
const compression = require('compression');

// handlebars related technologies

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

const db = require('./models');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// express set up
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resvae: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(require('./routes/Routes'));

/***/// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

sequelize.sync({force: true}).then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`)
    });
})