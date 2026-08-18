const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
  

    Packet:{
        type:[               
                    {
                        Packetno:Number,
                        SubjectCode:String,
                        NoOfSheet:Number
                                                        
                    }
                
            ],      
    },
    TeacherId:{
        type:String,
        required:true
    },   
    AllocateBy:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Supervisor:{
        type:String,
        required:true
    } 
    ,
    HeadExaminar:{
        type:String,
        required:true
    }     
})
const packetAllocation=mongoose.model('packetAllocation',userSchema);
module.exports=packetAllocation;