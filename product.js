const router = require('express').Router();
const express = require('express')
const multer = require('multer');
var upload = multer({dest:"../public/upload/"})
const ProductDetail = require("../model/productmd")
const path = require('path')

router.use(express.static(__dirname+"../public/upload/"));

var storage = multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'./public/upload/')
    },
    filename : function(req,res,cb){
        cb(null,Date.now()+file.orignalname.extension())
    }
});

router.post("/insertProduct",upload.single('ProductImage'),async(req,res)=>{
    try{
        const NewProduct = new ProductDetail({
            ProductName:req.body.ProductName,
            ProductCompany:req.body.ProductCompany,
            ProductImage:req.file.path,
            ProductAmount:req.body.ProductAmount,
            ProductDiscription:req.body.ProductDiscription
        })
        const product = await NewProduct.save()
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/checkProduct",async (req,res)=>{
const getproduct = await ProductDetail.find()
res.send(getproduct);
})

const filefilter =(req,file,cb)=>{
    if(file.mimetype==='image/jpeg'||file.mimetype==='image/jpg'|| file.mimetype==='image/png'){
        cb(null,true);
    }else{
         cb(null,false);
    }
    }
var upload = multer({storage:storage,
limit:{fileSize:1024*1024*5},filefilter:filefilter});
module.exports = router;