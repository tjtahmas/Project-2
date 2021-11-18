const express = require('express');
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;

const db = require('./models');

const app = express();

app.get('/', function(req, res){
    res.send("Homepage!");
});

sequelize.sync({force: true}).then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`)
    });
});
