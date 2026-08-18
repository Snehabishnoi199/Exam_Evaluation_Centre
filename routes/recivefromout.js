const ReciveOutModel=require("../models/recieveoutside")
const bodyparser=require("body-parser")
const express=require("express")

const router=express.Router();
router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:false}))

// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: true
//   }));
  
//   // Flash middleware
//   router.use(flash());

router.get('/alert', (req, res) => {
    const message = req.flash('message')[0] || '';
    res.render('addPacket', { message: message});
});

router.post("/",async(req,res)=>{
    try{
        const data=req.body;
        const newPacket=new ReciveOutModel(data);
        const response=await newPacket.save();
        res.redirect("/admin/addpacket")
       

    }catch(er){
        res.redirect("/admin/addpacket")
    }
})
module.exports=router;