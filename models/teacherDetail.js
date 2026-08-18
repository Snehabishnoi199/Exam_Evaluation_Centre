const mongoose=require("mongoose")
const schema=mongoose.Schema({

    Id:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Qualification:{
        type:String ,
        required:true
    },
    Position:{
        type:String,
        required:true
    }
})
const TeacherDetail=mongoose.model("TeacherDetail",schema)
module.exports=TeacherDetail