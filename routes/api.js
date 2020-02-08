const express = require('express');
const router = express.Router(); //router object you mount methods to. 
const User = require('../models/users'); //require User model so you can post. 

//get list of recipes from db
router.get('/recipes', function(req, res){
    res.send({type: 'GET'})
});



//POST ROUTES

//add a user to db.
router.post('/users', function(req, res){
    User.create(req.body).then(function(user){ //Promise
        res.send(user)
    });
    }); 
    
    //new instance of User object and save it to db. 
    //receive a post req with JSON body. That'll be based off the schema. .create is a mongoose method. It calls that on the model
    //saves it to the db.  
    //.then is a promise that waits for that action to complete. it returns the user from the db in the response to the user/client. 


//add a recipe to db.
router.post('/recipes', function(req, res){
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        height: req.body.height
    });
});

//update a recipe in db. 
router.put('/recipes/:id', function(req, res){
    res.send({type: 'PUT'})
});

//delete a recipe in db. 
router.delete('/recipes/:id', function(req, res){
    res.send({type: 'GET'})
});



module.exports = router; 