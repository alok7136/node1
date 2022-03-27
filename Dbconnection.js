const mongoose = require('mongoose');
const express = require('express'); 
const app = express();
const authroute = require("../api/product");
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ProductDetail",{useNewUrlParser:true})
.then(()=>console.log("server Sucessfully Connected")).catch((err)=>console.log("err"));

app.use("/routers/product",authroute);

app.listen(4000,()=>{
    console.log("server has been connected on port no 4000");
});