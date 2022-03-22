const express = require("express");
const schoolsModel = require("../../models/schools");
const router = express.Router();

//All Schools
router.get("/schools/all", (req, res) => {
  schoolsModel.find({}, (err, docs) => {
    if (err) res.json({ message: false, message: docs });
    res.json({ success: true, message: docs });
  });
});

//Get one school
router.get("/schools/:id", (req, res) => {
  var id = req.query.id;
  schoolsModel.findOne({ _id: id }, (err, docs) => {
    if (err) res.json({ success: false, message: err });
    if (docs.length > 0) res.json({ success: true, message: docs });
    else res.json({success:false,message:'Okul bulunamadı.'})
  });
});


module.exports = router;

