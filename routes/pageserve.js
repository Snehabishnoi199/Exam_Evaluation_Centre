const express=require("express")
const route=express.Router();
const app=express();
const bodyparser=require("body-parser")
const path=require("path")
route.use(bodyparser.json())
route.use(bodyparser.urlencoded({extended:false}))
route.use(express.urlencoded({extended:false}))

route.get("/addpacket",(req,res)=>{
    try{
        
        res.render("addPacket")
        

    }catch(err){
        
        res.sendStatus(404);
    }
    
})
route.get("/logout",(req,res)=>{
    try{
        
        res.render("login")
        

    }catch(err){
        
        res.sendStatus(404);
    }
    
})

route.get("/adminhome",(req,res)=>{
    try{
        
        res.render("adminPanel")
        

    }catch(err){
       
        res.sendStatus(404);
    }
    
})
route.get("/billui",(req,res)=>{
    try{
        
        res.render("billui")
        

    }catch(err){
       
        res.sendStatus(404);
    }
    
})
route.get("/allocatepacket",(req,res)=>{
    try{
        res.render("allocatepacket")

    }catch(err){
        
        res.sendStatus(404);
    }
    
})
route.get("/teacherdetail",(req,res)=>{
    try{
        res.render("Teacher")

    }catch(err){
       
        res.sendStatus(404);
    }
    
})
route.get("/recivepacket",(req,res)=>{
    try{
        res.render("RecievePacketFromTeacher")

    }catch(err){
        
        res.sendStatus(404);
    }
    
})
route.get("/bill",(req,res)=>{
    try{
        res.render("bill")

    }catch(err){
        
        res.sendStatus(404);
    }
    
})
route.get("/teachershow",(req,res)=>{
    try{
        res.render("TeacherShow")   

    }catch(err){
        
        res.sendStatus(404);
    }
    
})

module.exports=route