require("dotenv").config();
const mongoose = require("mongoose");
const Admin = require("./models/gpadmin");

mongoose.connect(process.env.MONGO_DB)
    .then(async () => {
        console.log("Database Connected");

        const admin = new Admin({
            username: "admin",
            password: "admin123"
        });

        await admin.save();

        console.log("Admin created successfully");
        process.exit();
    })
    .catch((err) => {
        console.log("Error:", err);
    });