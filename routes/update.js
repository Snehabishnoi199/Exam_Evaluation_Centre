const flash = require("express-flash");
const PacketAllocate = require("../models/packetAllocates.js")
const recieveoutside = require("../models/recieveoutside.js")
const Teacher= require("../models/teacherDetail.js")

const bodyparser = require("body-parser")
const express = require("express")
const router = express.Router();
router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: false }))


const check = async (id) => {
    try {
        console.log("Entering check function:", id);
        const query = {
            PacketNo: id
        }
        const check = await recieveoutside.findOne(query);

        if (check) {
            console.log("Check found:", check);
            return true;
        } else {
            return false;
        }
    } catch (er) {
        console.log("Error in check:", er);
        return false;
    }
}

const update_Packet = async (pac,dataa) => {
    console.log(pac);
    try {
        const data = {
            PacketNo: dataa.PacketNo,
            InstituteCode:dataa.InstituteCode,
            NoofSheet:dataa.NoofSheet,
            BranchCode:dataa.BranchCode,
            Status:dataa.Status
            
        }
        const update = await recieveoutside.findOneAndUpdate({ PacketNo: pac }, {
            PacketNo: data.PacketNo,
            InstituteCode:data.InstituteCode,
            NoofSheet:data.NoofSheet,
            BranchCode:data.BranchCode,
            Status:data.Status

            
        
        
        
        }, {
            new: true,
            runValidators: true
        })
        if (update) {
            console.log("Updated ");
            return true;
        } else {
            console.log("Not Updated");
            return false;
        }
    } catch (er) {
        console.log("Error in update_Packet:", er);
    }
}


router.post("/", async (req, res) => {
    try {
        const pac = req.body;
        
        const checkData = req.body.PacketNo;
        
        console.log("checkData:", checkData);
        const exist = await check(checkData);
        if (exist) {
           
            
              const up= update_Packet(checkData,pac)
              
              
                if(up){
                    res.redirect("/check")
                }else{
                    res.status(500).json({data:"Not Saved iiii"})
                }
        } else {
            res.json({message:"Data Not Found "}).status(404)


        }
    } catch (er) {
        console.log("Error in router.post:", er);
        res.status(500).json({ msg: "Error" });
    }
});


const update_Teacher = async (id,dataa) => {
    console.log("HHHH",id);
    try {
        const data = {
            Id: dataa.Id,
            Name:dataa.Name,          
            Qualification:dataa.Qualification,
            Position:dataa.Position
            
        }
        console.log("new data ",data);
        const update = await Teacher.findOneAndUpdate({ Id: id }, {
            Id: data.Id,
            Name:data.Name,
            Qualification:data.Qualification,
            Position:data.Position        
        }, {
            new: true,
            runValidators: true
        })
        if (update) {
            console.log("Updated Teacher");
            return true;
        } else {
            console.log("Not Updated Teacher");
            return false;
        }
    } catch (er) {
        console.log("Error in update_Packet:", er);
    }
}

const checkTeacher = async (id) => {
    try {
        console.log("Entering check function:", id);
        const query = {
            Id: id
        }
        const check = await Teacher.findOne(query);

        if (check) {
            console.log("Check found:", check);
            return true;
        } else {
            return false;
        }
    } catch (er) {
        console.log("Error in check:", er);
        return false;
    }
}
router.post("/teacheredit", async (req, res) => {
    try {
        console.log("enter teacher space");
        const pac = req.body;
        
        const checkData = req.body.Id;
        
        console.log("checkData:", checkData);
        const exist = await checkTeacher(checkData);
        if (exist) {
           
            
              const up= update_Teacher(checkData,pac)
              
              
                if(up){
                    res.redirect("/check/teacher")
                }else{
                    res.status(500).json({data:"Not Saved iiii"})
                }
        } else {
            res.json({message:"Data Not Found "}).status(404)


        }
    } catch (er) {
        console.log("Error in router.post:", er);
        res.status(500).json({ msg: "Error" });
    }
});

module.exports = router;
