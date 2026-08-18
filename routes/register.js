const express=require("express")
const route=express.Router();
const bodyparser=require("body-parser");
const gpadmin=require("../models/gpadmin")
route.use(bodyparser.json())
route.use(bodyparser.urlencoded(
    {
    extended:false
    }))
route.post("/",async(req,res)=>{
    try{
        const data=req.body;
        const newGp=new gpadmin(data)
        const response=await newGp.save()
        console.log("Data Saved",data);
        res.status(200).json({data:data})

    }catch(err){
        res.status(500).json({msg:"Insternal  Server Eroor",err:err})

    }

})
module.exports=route