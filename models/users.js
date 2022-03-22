const mongoose = require("../db/connection");

const usersSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  lastname: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  schoolCode: {
    required: true,
    type: Number,
  },
  authorization:{
    required:true,
    type:String
  }
},{timestamps:true});

const usersModel = mongoose.model("users", usersSchema);
module.exports = usersModel;
