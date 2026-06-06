const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
    companyName:String,
    category:String,
    gst:String,
    contact:String,
    status:String
});

module.exports = mongoose.model("Vendor", VendorSchema);
