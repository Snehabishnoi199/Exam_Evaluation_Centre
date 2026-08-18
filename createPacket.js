require("dotenv").config();
const mongoose = require("mongoose");
const PacketAllocation = require("./models/packetAllocates");

mongoose.connect(process.env.MONGO_DB)
    .then(async () => {
        console.log("Database Connected");

        const packet = new PacketAllocation({
            Packet: [
                {
                    Packetno: 1,
                    SubjectCode: "CS101",
                    NoOfSheet: 10
                },
                {
                    Packetno: 2,
                    SubjectCode: "CS102",
                    NoOfSheet: 15
                }
            ],
            TeacherId: "2",
            AllocateBy: "admin",
            Date: "2026-08-18",
            Supervisor: "admin",
            HeadExaminar: "admin"
        });

        await packet.save();

        console.log("Packet allocation created successfully");
        process.exit();
    })
    .catch((err) => {
        console.log("Error:", err);
    });