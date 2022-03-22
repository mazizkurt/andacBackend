const express = require('express');
const schoolsModel = require('../../models/schools');
const router = express.Router();


// Delete one school
router.delete('/schools/delete/:id',(req,res)=>{
    var id = req.query.id;
    schoolsModel.deleteOne({_id:id},(err,docs)=>{
        if(err) res.json({success:false,message:err})
        res.json({success:true,message:docs,info:'Okul başarıyla silindi.'})
    })
})

// Add School
router.post('/schools/add',(req,res)=>{
    var {schoolName,schoolAddress,schoolCode} = req.body;
    if(schoolName)
        if(schoolAddress)
            if(schoolCode)
            {
                var addSchool = {
                    schoolName,
                    schoolAddress,
                    schoolCode
                }
                var school = new schoolsModel(addSchool);
                school.save()
                .then((res)=>{
                    res.json({success:true,message:res,schoolInfo:addSchool})
                })
                .catch((err)=>{
                    res.json({success:false,message:err})
                })
            }
            else   
                res.json({success:false,message:'Lütfen okul kodu belirtin.'})
        else
            res.json({success:false,message:'Lütfen okul adresi belirtin.'})
    else
        res.json({success:false,message:'Lütfen okul kodu belirtin.'})
})

// Update School
router.post('/schools/update/:id',(req,res)=>{
    var id = req.query.id;
    var {schoolName,schoolAddress} = req.body;
    if(schoolName)
        if(schoolAddress)
        {
            schoolsModel.updateOne({_id:id},{"$set":{schoolName,schoolAddress}},(err,docs)=>{
                if(err) res.json({success:false,message:err});
                res.json({success:true,message:docs});
            })
        }
        else
            res.json({success:false,message:'Lütfen okul adresini belirtin.'})
    else
        res.json({success:false,message:'Lütfen okul adını belirtin.'})
})
module.exports = router;