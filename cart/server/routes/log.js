const express = require('express');
const User = require('../models/register');
const router = express.Router();

router.post('/login',function(req,res){
    const body = req.body
    const email=body.email
    const password = body.password
    try{
        User.findOne({email:email,password:password},(err,val)=>{
            if(err){
                console.log(err);
            }else{
                if(val){
                    res.status(200).json('Success');
                }else{
                    res.status(401).json('unauthorized');
                }
            }
        });
    }catch(err){
        res.status(500).json(err)
    }
});
module.exports = router;