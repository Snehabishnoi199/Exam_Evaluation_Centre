# Exam Evaluation Centre

A web-based Exam Evaluation Centre management system developed using Node.js, Express.js, MongoDB, and EJS. The application helps manage examiners, teachers, answer packet allocation, packet receiving, and bill generation.

## Features

- Admin Login
- Teacher Details Management
- Examiner Management
- Answer Packet Allocation
- Packet Receiving and Tracking
- Examiner Bill Generation
- MongoDB Database Integration
- Dynamic Web Pages using EJS
- Form Handling and Data Validation

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- JavaScript
- HTML5
- CSS3
- Bootstrap

## Project Structure

```text
Exam-Evaluation-Centre/
│
├── database/
│   └── db.js
│
├── models/
│   ├── gpadmin.js
│   ├── packetAllocates.js
│   ├── recieveoutside.js
│   ├── recievePacket.js
│   └── teacherDetail.js
│
├── public/
│   ├── css/
│   └── images/
│
├── routes/
│   ├── bill.js
│   ├── check.js
│   ├── login.js
│   ├── packetallocate.js
│   ├── receivefromoutside.js
│   ├── receivefromout.js
│   ├── register.js
│   ├── teacher.js
│   └── update.js
│
├── views/
│   └── EJS templates
│
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
