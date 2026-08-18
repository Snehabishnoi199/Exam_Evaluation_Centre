const exprees=require("express")
require ("dotenv").config();
const app=exprees()
const port=process.env.PORT||3000;
const db=require('./database/db.js')
const path = require('path')
const session = require('express-session');
const flash = require('connect-flash');
// app.use('/static',exprees.static(__dirname + '/public'));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
  }));
  
  // Flash middleware
  app.use(flash());


app.set('view engine', 'ejs');
app.use(exprees.static('public'))

app.get("/",(req,res)=>{
   res.render("login",{root: __dirname})
})
// app.get('/public/css/style.css', (req, res) => {
//     res.type('text/css');
//     res.sendFile(__dirname + '/public/css/style.css');
// });



//routes
const login=require("./routes/login.js")
const register=require("./routes/register.js")
const addpacket=require("./routes/recivefromout.js")
const check=require("./routes/check.js")
const packetAllocate=require("./routes/packetallocate.js")
const PacketRecieveFromTeacher=require("./routes/packetReciveFromTeacher.js")
const bill=require("./routes/bill.js")
const teacher=require("./routes/teacher.js")
const pageserve=require("./routes/pageserve.js")
const update=require("./routes/update.js")


app.use("/register",register)
app.use("/submit",login)
app.use("/addpacket",addpacket)
app.use("/check",check)
app.use("/packetallocate",packetAllocate)
app.use("/recievePacket",PacketRecieveFromTeacher)
app.use("/bill",bill)
app.use("/teacherregister",teacher)
app.use("/admin",pageserve)
app.use("/update",update)





app.listen(port,()=>{
    console.log("Server Is started",port);
})
