const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name field is required']
    },
    email:{
        type:String,
        required:[true,'email field is required']
    },
    password:{
        type:String,
        required:true
    } ,
    role:{
        type:String,
        required:true
    }                      
});


const User = mongoose.model('user',UserSchema);

module.exports = User;