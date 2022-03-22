const mongoose = require("../db/connection");

const schoolsSchema = mongoose.Schema(
  {
    schoolName: {
      type: String,
      required: true,
    },
    schoolAddress:{
        type:String,
        required:true
    },
    schoolCode:{
        type:Number,
        required:true
    }
  },
  { timestamps: true }
);

const schoolsModel = mongoose.model('schools',schoolsSchema);
module.exports = schoolsModel;
