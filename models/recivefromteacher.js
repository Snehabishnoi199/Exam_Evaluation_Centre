const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    PacketNo:{
        type:Number ,
        required:true,
        
    },
    RecieveBy:{
        type:String,
        required:true
    },
    Date:
    {
        type:String,
        required:true
    }
   
})
const recievePacket=mongoose.model('recievePacket',userSchema);
module.exports=recievePacket;