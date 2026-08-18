const express=require("express")
const route=express.Router();
const app=express();
const bodyparser=require("body-parser")
const gpadmin=require("../models/gpadmin")
const path=require("path")
route.use(bodyparser.json())
route.use(bodyparser.urlencoded({extended:false}))
route.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")));
route.post("/",async(req,res)=>{
    try{
        const data={
           
            username:req.body.username,
            password:req.body.password,

        }
        console.log("This Is =",data);
        
        const find=await gpadmin.findOne({username:data.username})
        console.log(find);
        if(!find){
            res.status(404).json({msg:"User Not Found"})
        }else{

            if(find.password!==data.password){
               
                res.status(404).json({msg:"Wrong Password"})
            }else{
                res.render("adminPanel");
                
            }
        }
        }catch(er){
        console.log(er);
        }
})
module.exports=route