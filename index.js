const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//express app 
const app = express(); //express app

//connect to mongodb
mongoose.connect('mongodb://localhost/myrecipebox'); //name of db
mongoose.Promise = global.Promise; //overrides mongo's promise to Node's Promise. 


app.use(bodyParser.json()); //needs to go before the routes.

//init routes. 
//.use is middleware. 
app.use('/myrecipebox', require('./routes/api')); //will use the routes variable you required here and exported in api.js

app.listen(process.env.port || 4000, function(){  //listener w callback fn. env.port is heroku for ex.  
    console.log('listening')
});




//test through postman. browser only works through get requests. 