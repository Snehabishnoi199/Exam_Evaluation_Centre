const packetAllocate=require("../models/packetAllocates")
const ReciveOutModel=require("../models/recieveoutside")
const teacherDetail=require("../models/teacherDetail")

const bodyparser=require("body-parser")
const express=require("express")

const router=express.Router();
router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:false}))

const Find= async (id)=>{
    try{
        const find=await packetAllocate.find({TeacherId:id})
        console.log("Data Found Teacher",find);
        return find;
    }catch(err){

        console.log("Eror Found ",err);
        
    }
}
const T_detail=async(id)=>{
    try{
        console.log("Id=",id);
        const data = await teacherDetail.find({Id:id})
        console.log("Data Found ",data);
        return data;
        
    }catch(err){
        console.log(err);
        return false

    }

}

router.post("/", async (req,res)=>{
    try{
        const id=req.body.id;
        const Packet= await Find(id);
        const data_Find=await T_detail(id);
        
        console.log("Hello",data_Find[0]);
        // console.log("Hello World",Packet[0].Packet);

        const data={
            Name : data_Find[0].Name,
            Qualification : data_Find[0].Qualification,
            Position :data_Find[0].Position
            ,Packet:Packet[0].Packet,
            
        }
        console.log("Pckets",data.Packet);
       
        res.render("bill",{data})
        

    }catch(err){
        console.log("Hello World error",err);
        res.status(500).json({error:err})
    }


})
module.exports=router