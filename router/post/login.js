const express = require("express");
const md5 = require("md5");
const jwt = require('jsonwebtoken');
const usersModel = require("../../models/users");
require("dotenv/config");
const router = express.Router();

// Users Login Process
router.post("/users/login", (req, res) => {
  var username = req.body.username;
  var password = md5(password);
  usersModel.find({ $and: [{ username }, { password }] }, (err, docs) => {
    if (err) res.json({ success: false, message: docs });
    if (docs.length > 0){
        var accessToken = jwt.sign({username},process.env.ACCESS_TOKEN_SECRET)
        res.json({ success: true, message: docs, accessToken: accessToken });
    }
    else
      res.json({
        success: false,
        message:
          "Kullanıcı adı veya şifre hatalı. Lütfen bilgileri doğru girdiğinizden emin olun.",
      });
  });
});




module.exports = router;
