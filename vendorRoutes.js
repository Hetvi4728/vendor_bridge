const express = require("express");
const Vendor = require("../models/Vendor");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, async(req,res)=>{
    const vendor = await Vendor.create(req.body);
    res.json(vendor);
});

router.get("/", auth, async(req,res)=>{
    const vendors = await Vendor.find();
    res.json(vendors);
});

module.exports = router;
