/***/
require("dotenv").config(); 
const router = require("./routes/Routes")

const express = require('express');
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;

const db = require('./models');

const app = express();

/***/// Middleware
app.use(express.json());
app.use("/:user_name", router);

app.get('/', function(req, res){
    res.send("Homepage!");
});

sequelize.sync({force: true}).then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`)
    });
});
