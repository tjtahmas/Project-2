/***/
require("dotenv").config(); 
const router = require("./routes/Routes")
const express = require('express');
const sequelize = require('./config/connection');
const bodyParser = require('body-parser');

// handlebars related technologies

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');




const db = require('./models');


// express set up
const app = express();
const PORT = process.env.PORT || 3001;





app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(require('./routes/Routes'));




/***/// Middleware
app.use(express.json());

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/:user_name", router);

// redirect routes

//router.route("/").get(Controllers.getMyGrps);


// utilize req.param(s) to target correct routes ( get and post requests concerned)
// work on inheriting
// work from server
 app.get('/create-character', function(req, res) {
    res.render("create-character");
 });
 app.get('/character', function(req, res) {
    res.render("character");
 });



 app.get('/', function(req, res) {
    res.render("login");
 });

 app.get('/campaign', function(req, res) {
    res.render("campaign");
 });

 app.get('/group', function(req, res) {
    res.render("group");
 });




sequelize.sync({force: true}).then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`)
    });
})