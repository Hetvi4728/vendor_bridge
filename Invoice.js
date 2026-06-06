const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
    vendor:String,
    amount:Number,
    dueDate:String,
    status:{type:String,default:"Pending"}
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
