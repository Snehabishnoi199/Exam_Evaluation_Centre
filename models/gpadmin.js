const mongoose=require("mongoose");
const gpadmin=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const Admin=mongoose.model("GPAdmin",gpadmin);
module.exports=Admin;