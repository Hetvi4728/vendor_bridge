const mongoose = require("mongoose");

const RFQSchema = new mongoose.Schema({
    title:String,
    details:String,
    quantity:Number,
    deadline:String,
    vendor:String,
    status:{type:String,default:"Active"}
});

module.exports = mongoose.model("RFQ", RFQSchema);
