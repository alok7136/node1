const mongoose = require('mongoose');
const Product = new mongoose.Schema({
    ProductName:{
        type:String,
        require:true
    },
    ProductCompany:{
        type:String,
        require:true
    }, 
    ProductImage:{
        type:String,
        require:true
    },
    ProductAmount:{
        type:Number,
        require:true
    },
    ProductDiscription:{
        type:String,
        require:true
    }
});
var ProductDetail = new mongoose.model("ProductDetail",Product);
module.exports=ProductDetail;

