const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Name field is required']
    },
    email_address: {
        type: String,
        required: [true, 'Email Address is required']        
    },
    available: {
        type: Boolean,
        default: false
    }  
});

//password

//available is set to false so if

//create a model 
const User = mongoose.model('user', UserSchema) //'user is the collection name (i.e. table)
//mongoose will pluralize this for us b.c it is a collection. 
//Model name is 'user', schema it uses is UserSchema

module.exports = User;
