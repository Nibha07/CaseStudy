const express = require('express');
const User = require('../models/register');
const router = express.Router();

router.post('/register',function(req,res,next){
    const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role
    });

    newUser.save(function(err){
        if(err){
            res.send(err.message);
        }else{
            res.send(newUser)
        }
    });

});

module.exports=router;