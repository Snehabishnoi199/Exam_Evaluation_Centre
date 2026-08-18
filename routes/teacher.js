const express=require("express")
const router=express.Router()
const bodyparser=require("body-parser")
const teacher=require("../models/teacherDetail")

router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:false}))
router.post("/", async(req,res)=>{
    try{
        const data=req.body
        const newPacket=new teacher(data)
        const save=await newPacket.save();
        res.redirect("/admin/teacherdetail")

    }catch(err){
        
        res.status(500).json({Eroor:err})
        console.log(err);
    }

    
})
module.exports=router;