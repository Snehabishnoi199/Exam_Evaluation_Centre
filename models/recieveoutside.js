const mongose=require("mongoose")
const reicievefromoutside=mongose.Schema({
    PacketNo:{
        type:Number,
        required:true,
        unique:true
    },
    InstituteCode:{
        type:Number,
        required:true
    },
    NoofSheet:{  
        type:Number,
        required:true
    },
    BranchCode:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    },
    Alloted:{
        type :String,
        
        default:false
    },
    Checked:{
        type:Boolean,
        default:false
    }
})
const reicievefromoutsidemodel=mongose.model("recievefromoutside",reicievefromoutside)
module.exports=reicievefromoutsidemodel;