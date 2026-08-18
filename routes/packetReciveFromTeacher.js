const ReciveFromTeacher=require("../models/recivefromteacher.js")
const recieveoutside=require("../models/recieveoutside.js")
const bodyparser=require("body-parser")
const express=require("express")
const router=express.Router();
router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:false}))

const update_Packet = async(pac)=> {
    console.log(pac);
    try{        
        const update=await recieveoutside.findOneAndUpdate({PacketNo:pac},{Checked:true},{
            new:true,
            runValidators:true
        })
        if(update){
            console.log("Updated");
        }else{
            console.log("Not Updated");
        }
    }catch(er){
        console.log("Erorr Soething")
    }   
}

router.post("/",async(req,res)=>{
    try{
        const data=req.body; 
        const pac=req.body.PacketNo;       
        const newPacket=new ReciveFromTeacher(data);
        const response=await newPacket.save();   
        
        update_Packet(pac)       
        // res.status(200).json({msg:"Success",data:response,PacketNo:pac});
        res.redirect("/admin/recivepacket")
    }catch(er){
        console.log(er);
        res.status(500).json({msg:"Error Something"});
    }
})
module.exports=router;