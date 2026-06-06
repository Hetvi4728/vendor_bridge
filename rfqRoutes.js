const express = require("express");
const RFQ = require("../models/RFQ");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, async(req,res)=>{
    const rfq = await RFQ.create(req.body);
    res.json(rfq);
});

router.get("/", auth, async(req,res)=>{
    const rfqs = await RFQ.find();
    res.json(rfqs);
});

module.exports = router;
