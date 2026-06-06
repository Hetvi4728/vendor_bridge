const express = require("express");
const Invoice = require("../models/Invoice");
const PDFDocument = require("pdfkit");
const fs = require("fs");

const router = express.Router();

router.post("/", async(req,res)=>{
    const invoice = await Invoice.create(req.body);
    res.json(invoice);
});

router.get("/", async(req,res)=>{
    const invoices = await Invoice.find();
    res.json(invoices);
});

router.get("/pdf/:id", async(req,res)=>{

    const invoice = await Invoice.findById(req.params.id);

    const doc = new PDFDocument();

    const fileName = `invoice-${invoice._id}.pdf`;

    doc.pipe(fs.createWriteStream(fileName));

    doc.fontSize(22).text("Invoice");
    doc.text(`Vendor: ${invoice.vendor}`);
    doc.text(`Amount: ${invoice.amount}`);
    doc.text(`Status: ${invoice.status}`);

    doc.end();

    res.json({message:"PDF Generated"});
});

module.exports = router;
