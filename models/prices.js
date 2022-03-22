const mongoose = require('mongoose');

const pricesSchema = mongoose.Schema({
    packedName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    packedDetail:{
        type:String,
        required:true
    },
    packedImage:{
        type:String,
    }
},{timestamps:true})
const pricesModel = mongoose.model('prices',pricesSchema);
module.exports = pricesModel;