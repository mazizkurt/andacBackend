const mongoose = require("../db/connection");

const authorizationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const authorizationModel = mongoose.model('authorization',authorizationSchema);
module.exports = authorizationModel;
