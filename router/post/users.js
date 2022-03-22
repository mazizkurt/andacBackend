const express = require("express");
const md5 = require("md5");
const usersModel = require("../../models/users");
require("dotenv/config");
const router = express.Router();

// ADD USER
router.post('/users/add',(req,res)=>{
    var {username,password,address,name,lastname,phone,schoolCode} = req.body;
    password = md5(password)
    if(username)
        if(password)
            if(name)
                if(lastname)
                    if(phone)
                        if(address)
                            if(schoolCode)
                            {
                                var data = {
                                    name,
                                    lastname,
                                    username,
                                    password,
                                    phone,
                                    address,
                                    schoolCode
                                }
                                var userAdd = new usersModel(data);
                                userAdd.save()
                                .then((res)=>{
                                    res.json({success:true,message:res,userInfo:data})
                                }).catch((err)=>{
                                    res.json({success:false,message:err})
                                })
                            }
                            else
                                res.json({success:false,message:'Lütfen okul kodunuzu belirtin.'})
                        else
                            res.json({success:false,message:'Lütfen adresinizi belirtin.'})
                    else
                        res.json({success:false,message:'Lütfen telefon numaranızı belirtin.'})
                else
                    res.json({success:false,message:'Lütfen soyisminizi belirtin.'})
            else
                res.json({success:false,message:'Lütfen isminizi belirtin.'})
        else
            res.json({success:false,message:'Lütfen şifrenizi belirtin.'})
    else
        res.json({success:false,message:'Lütfen kullanıcı adınızı belirtin.'})
})



module.exports = router;
