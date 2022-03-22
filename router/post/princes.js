const express = require('express');
const pricesModel = require('../../models/prices');
const router = express.Router();
//Delete One Princes
router.delete('/princes/delete/:id',(req,res)=>{
    // if(err) res.json({success:false,message:err})
    var id = req.query.id;
    pricesModel.deleteOne({_id:id},(err,docs)=>{
        if(err) res.json({success:false,message:err})
        res.json({success:true,message:docs})
    })
})

router.post('/princes/add',(req,res)=>{
    var {packedName,price,packedDetail,packedImage} = req.body;
    if(packedName)
        if(packedDetail)
            if(price)
               {
                   var princesData = {
                       packedName,
                       price,
                       packedDetail,
                       packedImage
                   }
                   var princes = new pricesModel(princesData);
                   princes.save()
                   .then((response)=>{
                       res.json({success:true,message:response,princesInfo:princesData})
                   })
                   .catch((err)=>{
                       res.json({success:false,message:err})
                   })
               }
            else    
                res.json({success:true,message:'Lütfen paket fiyatı belirtin.'})
        else
            res.json({success:true,message:'Lütfen paket detaylarını belirtin.'})
    else
        res.json({success:false,message:'Lütfen paket adını girin.'});
})

//Update princes 
router.post('/princes/update/:id',(req,res)=>{
    var id = req.query.id;
    var {packedName,price,packedDetail,packedImage} = req.body;
    if(packedName)
        if(packedDetail)
            if(price)
            {
                pricesModel.updateMany({_id:id},{'$set':{packedName,price,packedDetail,packedImage}},(err,docs)=>{
                    if(err) res.json({success:false,message:err})
                    res.json({success:true,message:docs})
                })
            }
            else
                res.json({success:false,message:'Lütfen paket fiyatı belirtin.'})
        else
            res.json({success:false,message:'Lütfen paket detaylarını belirtin.'})
    else
        res.json({success:false,message:'Lütfen paket ismi belirtin.'})
})

module.exports = router