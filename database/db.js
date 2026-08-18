const mongose=require("mongoose");
require ("dotenv").config();

//const mongoURL='mongodb://localhost:27017/tmc';
const mongoURL=process.env.MONGO_DB;
mongose.connect(mongoURL)
// ,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true

// }

const db=mongose.connection;
db.on('connected',()=>{
    console.log("DataBase Connected");
})
db.on('error',(err)=>{
    console.log("Eroor=",err);
})
db.on('disconnected',()=>{
    console.log("Disconnected");
})


// const mongoose = require('mongoose');
// const uri = "mongodb+srv://soniparvesh54:<password>@cluster0.etlbgvq.mongodb.net/?retryWrites=true&w=majority&appName=cluster0";

// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);
module.exports=db;
