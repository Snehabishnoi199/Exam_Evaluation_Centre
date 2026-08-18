const ReciveOutModel=require("../models/recieveoutside")
const bodyparser=require("body-parser")
const Teacher=require("../models/teacherDetail")

const express=require("express")

const router=express.Router();
router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:false}))


router.get("/",async(req,res)=>{
    try{
        
        const data=await ReciveOutModel.find();
        
        res.render("show",{data});
        // res.send("Hello Worl")


    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
router.post("/byid",async(req,res)=>{
    try{
        const para=req.body.search;
        console.log(para);
        
        const data=await ReciveOutModel.find({PacketNo:para});
        // res.status(200).json({msg:"Success",data:check});
        console.log(data);
        res.render("show",{data});

    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
router.get("/alloted",async(req,res)=>{
    try{
        
        
        const data=await ReciveOutModel.find({Alloted:"true"});
        // res.status(200).json({msg:"Success",data:check});
        console.log("Hello" , data);
        res.render("show",{data});

    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
router.get("/notalloted",async(req,res)=>{
    try{
       
        
        
        const data=await ReciveOutModel.find({Alloted:false});
        // res.status(200).json({msg:"Success",data:check});
        res.render("show",{data});

    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
router.get("/checked",async(req,res)=>{
    try{
       
        
        
        const data=await ReciveOutModel.find({Checked:true});
        console.log("Hello" , data);
        // res.status(200).json({msg:"Success",data:check});
        res.render("show",{data});

    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
router.get("/notchecked",async(req,res)=>{
    try{
       
        
        
        const data=await ReciveOutModel.find({Checked:false});
        // res.status(200).json({msg:"Success",data:check});
        res.render("show",{data});

    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
router.get("/teacher",async(req,res)=>{
    try{
        
        const data=await Teacher.find();
        console.log("Hello Data Is here",data);
        
        res.render("TeacherShow",{data});
        // res.send("Hello Worl")


    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
module.exports=router;