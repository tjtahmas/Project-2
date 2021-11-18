/***/
require("dotenv").config(); 
const router = require("./routes/Routes")


const express = require('express');
const sequelize = require('./config/connection');
// const PORT = process.env.PORT || 3001;

// handlebars related technologies
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const helpers = require('./utils/helpers');



const db = require('./models');


// express set up
const app = express();
const PORT = process.env.PORT || 3001;



// Set handlabrs with helpers?
// const hbs = exphbs.create({ helpers });

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes/Routes'));


// Necessary? yay or nay
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(routes);
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });


/***/// Middleware
app.use(express.json());
app.use("/:user_name", router);

//router.route("/").get(Controllers.getMyGrps);

 app.get('/', function(req, res){
    // res.send("Homepage!");

});

sequelize.sync({force: true}).then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`)
    });
})