const express = require('express');
const usersModel = require('../../models/users');
const router = express.Router();

//All Users
router.get('/users',(req,res)=>{
    usersModel.find({},(err,docs)=>{
        if(err) res.json({success:false,message:err});
        res.json({success:true,message:docs})
    })
})

module.exports = router;