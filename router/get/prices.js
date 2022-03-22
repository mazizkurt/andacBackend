const express = require('express');
const pricesModel = require('../../models/prices');
const router = express.Router();

// Get All Princes
router.get('/princes/all',(err,docs)=>{
    if (err) res.json({success:false,message:err})
    res.json({success:true,message:docs})
})

// Get One Princes

router.get('/princes/:id',(req,res)=>{
    pricesModel.findOne({_id:id},(err,docs)=>{
        if(err) res.json({success:false,message:err})
        res.json({success:true,message:docs})
    })
    
})
module.exports = router;