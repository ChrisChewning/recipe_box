const express = require('express');
const router = express.Router(); //router object you mount methods to. 
const User = require('../models/users'); //require User model so you can post. 

//get list of recipes from db
router.get('/recipes', function(req, res, next){
    res.send({type: 'GET'})
});


//RETURN ALL USERS
router.get('/users', function(req, res, next){
    User.find({}).then(function(users){
        res.send(ninjas);
    })
});

//RETURN SPECIIC USER
router.get('/users/:id', function(req, res, next){
    res.send({type: 'GET'})
});

//POST ROUTES

//add a user to db.
router.post('/users', function(req, res, next){
    User.create(req.body).then(function(user){ //Promise
        res.send(user)
    }).catch(next); //i'm done here, go on to the next piece of middleware
    
}); 
    
    //new instance of User object and save it to db. 
    //receive a post req with JSON body. That'll be based off the schema. .create is a mongoose method. It calls that on the model
    //saves it to the db.  
    //.then is a promise that waits for that action to complete. it returns the user from the db in the response to the user/client. 


//add a recipe to db.
router.post('/recipes', function(req, res, next){
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        height: req.body.height
    });
});

//update a recipe in db. 
router.put('/recipes/:id', function(req, res, next){
    res.send({type: 'PUT'})
});

//update a user in db. 2nd param is in json body. 
router.put('/users/:id', function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id: req.params.id}).then(function(user){
            res.send(user);
        })        
    })
});

//delete a user in db. 
router.delete('/users/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
    });
});

//findbyidandremove is a mongoose method.

module.exports = router; 