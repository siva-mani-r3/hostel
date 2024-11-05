// const express =require("express")
// const mongoose=require("mongoose")
// const cors=require("cors")
// const app=express()
// app.use(express.json())
// app.use(cors())
// var nodemailer = require('nodemailer');
// const StudentModel=require('./models/Student')
// const UserModel=require('./models/Users1')
// const UserModel1=require('./models/Users2')
// const UserModel2=require('./models/Users3')
// const UserModel3=require('./models/Users4')
// const UserModel4=require('./models/Users5')
// const UserModel5=require('./models/Users6')
// const UserModel6=require('./models/Users7')
// const UserModel7=require('./models/Users8')
// const Siva=require('./models/Testing')
//  mongoose.connect("mongodb+srv://Author:sivamani@cluster0.mebcwvx.mongodb.net/students")
//     .then(() => {
//         console.log("MongoDB Connected Succesfully!");
//     })
//     .catch((error) =>{
//         console.log(`${error}`);
//     });
//     app.post('/login',(req,res)=>{
//         const {email,password}=req.body;

//         StudentModel.findOne({email:email})
        
//         .then(user =>{
//             if(user){
//                 if (user.password === password){
//                     res.json("success")
//                     Sivamani()
//                 }
//                 else{
//                     res.json("The password is not Correct")
//                 }}
//                 else{
//                     res.json("no Records Exsisted")
//                 }
//             }
//         )
//     })
//     app.post('/register',(req,res)=>{
//         StudentModel.create(req.body)
//         .then(students=>res.json(students))
//         .catch(err=>res.json(err))
        
//     })
//     // room1
//     app.get('/users1',(req,res)=>{
//         UserModel.find({})
//         .then(users=>res.json(users))
//         .catch(err=>res.json(err))

//     })
//     app.get('/getUser/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel.findById({_id:id})
//         .then(users=>res.json(users))
//         .catch(err=>res.json(err))
//     })
//     app.post('/create',(req,res)=>{
//         UserModel.create(req.body)
//         .then(users=>res.json(users))
//         .catch(err=>res.json(err))
//     })
//     app.put('/update/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
//         .then(users=>res.json(users))
//         .catch(err=>res.json(err))
//     })
//     app.delete('/deleteUser1/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel.findByIdAndDelete({_id:id})
//         .then(res=> res.json(res))
//         .catch(err=>res.json(err))
//     })
//     // room2
//     app.get('/users2',(req,res)=>{
//         UserModel1.find({})
//         .then(users2=>res.json(users2))
//         .catch(err=>res.json(err))

//     })
//     app.get('/getUser2/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel1.findById({_id:id})
//         .then(users2=>res.json(users2))
//         .catch(err=>res.json(err))
//     })
//     app.post('/create2',(req,res)=>{
//         UserModel1.create(req.body)
//         .then(users2=>res.json(users2))
//         .catch(err=>res.json(err))
//     })
//     app.put('/update2/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel1.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
//         .then(users2=>res.json(users2))
//         .catch(err=>res.json(err))
//     })
//     app.delete('/deleteUser2/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel1.findByIdAndDelete({_id:id})
//         .then(res=> res.json(res))
//         .catch(err=>res.json(err))
//     })
//     //room3
//     app.get('/users3',(req,res)=>{
//         UserModel2.find({})
//         .then(users3=>res.json(users3))
//         .catch(err=>res.json(err))

//     })
//     app.get('/getUser3/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel2.findById({_id:id})
//         .then(users2=>res.json(users2))
//         .catch(err=>res.json(err))
//     })
//     app.post('/create3',(req,res)=>{
//         UserModel2.create(req.body)
//         .then(users3=>res.json(users3))
//         .catch(err=>res.json(err))
//     })
//     app.put('/update3/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel2.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
//         .then(users2=>res.json(users2))
//         .catch(err=>res.json(err))
//     })
//     app.delete('/deleteUser3/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel2.findByIdAndDelete({_id:id})
//         .then(res=> res.json(res))
//         .catch(err=>res.json(err))
//     })
//     //room4
//     app.get('/users4',(req,res)=>{
//         UserModel3.find({})
//         .then(users4=>res.json(users4))
//         .catch(err=>res.json(err))

//     })
//     app.get('/getUser4/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel3.findById({_id:id})
//         .then(users4=>res.json(users4))
//         .catch(err=>res.json(err))
//     })
//     app.post('/create4',(req,res)=>{
//         UserModel3.create(req.body)
//         .then(users4=>res.json(users4))
//         .catch(err=>res.json(err))
//     })
//     app.put('/update4/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel3.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
//         .then(users4=>res.json(users4))
//         .catch(err=>res.json(err))
//     })
//     app.delete('/deleteUser4/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel3.findByIdAndDelete({_id:id})
//         .then(res=> res.json(res))
//         .catch(err=>res.json(err))
//     })
//     //room5
//     app.get('/users5',(req,res)=>{
//         UserModel4.find({})
//         .then(users5=>res.json(users5))
//         .catch(err=>res.json(err))

//     })
//     app.get('/getUser5/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel4.findById({_id:id})
//         .then(users5=>res.json(users5))
//         .catch(err=>res.json(err))
//     })
//     app.post('/create5',(req,res)=>{
//         UserModel4.create(req.body)
//         .then(users5=>res.json(users5))
//         .catch(err=>res.json(err))
//     })
//     app.put('/update5/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel4.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
//         .then(users5=>res.json(users5))
//         .catch(err=>res.json(err))
//     })
//     app.delete('/deleteUser5/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel4.findByIdAndDelete({_id:id})
//         .then(res=> res.json(res))
//         .catch(err=>res.json(err))
//     })
//     //room6
//     app.get('/users6',(req,res)=>{
//         UserModel5.find({})
//         .then(users6=>res.json(users6))
//         .catch(err=>res.json(err))
//     })
//     app.get('/getUser6/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel5.findById({_id:id})
//         .then(users6=>res.json(users6))
//         .catch(err=>res.json(err))
//     })
//     app.post('/create6',(req,res)=>{
//         UserModel5.create(req.body)
//         .then(users6=>res.json(users6))
//         .catch(err=>res.json(err))
//     })
//     app.put('/update6/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel5.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
//         .then(users6=>res.json(users6))
//         .catch(err=>res.json(err))
//     })
//     app.delete('/deleteUser6/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel5.findByIdAndDelete({_id:id})
//         .then(res=> res.json(res))
//         .catch(err=>res.json(err))
//     })
//     //room7
//     app.get('/users7',(req,res)=>{
//         UserModel6.find({})
//         .then(users7=>res.json(users7))
//         .catch(err=>res.json(err))

//     })
//     app.get('/getUser7/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel6.findById({_id:id})
//         .then(users7=>res.json(users7))
//         .catch(err=>res.json(err))
//     })
//     app.post('/create7',(req,res)=>{
//         UserModel6.create(req.body)
//         .then(users7=>res.json(users7))
//         .catch(err=>res.json(err))
//     })
//     app.put('/update7/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel6.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
//         .then(users7=>res.json(users7))
//         .catch(err=>res.json(err))
//     })
//     app.delete('/deleteUser7/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel6.findByIdAndDelete({_id:id})
//         .then(res=> res.json(res))
//         .catch(err=>res.json(err))
//     })
//     //room8
//     app.post
//     app.get('/users8',(req,res)=>{
//         UserModel7.find({})
//         .then(users7=>res.json(users7))
//         .catch(err=>res.json(err))

//     })
//     app.get('/getUser8/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel7.findById({_id:id})
//         .then(users8=>res.json(users8))
//         .catch(err=>res.json(err))
//     })
//     app.post('/create8',(req,res)=>{
//         UserModel7.create(req.body)
//         .then(users8=>res.json(users8))
//         .catch(err=>res.json(err))
//     })
//     app.put('/update8/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel7.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
//         .then(users8=>res.json(users8))
//         .catch(err=>res.json(err))
//     })
//     app.delete('/deleteUser8/:id',(req,res)=>{
//         const id=req.params.id;
//         UserModel7.findByIdAndDelete({_id:id})
//         .then(res=> res.json(res))
//         .catch(err=>res.json(err))
//     })
//     app.post('/testing',(req,res)=>{
//         Siva.create(req.body)
//         .then(user=>res.json(user))
//         .catch(err=>console.log(err))
//     })


//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'sivamaniramayanam7036@gmail.com',
//           pass: 'gjrm tarz sjgg sqtr'
//         }
//       });
//       const Sivamani=()=>{
    
//       var mailOptions = {
//         from: 'sivamaniramayanam7036@gmail.com',
//         to:"sivamaniramayanam2002@gmail.com",
//         subject: 'Hostel Management',
//         text: 'Thankyou for registering our account'
//       };
      
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent sucessfully: ' + info.response);
//         }
//       });
//     }
// app.listen(3002,()=>{
//     console.log("server is running")
// })
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const nodemailer = require('nodemailer'); // Import nodemailer
// const app = express();
// app.use(express.json());
// app.use(cors());

// const StudentModel = require('./models/Student');
// const UserModel = require('./models/Users1');
// const UserModel1 = require('./models/Users2');
// const UserModel2 = require('./models/Users3');
// const UserModel3 = require('./models/Users4');
// const UserModel4 = require('./models/Users5');
// const UserModel5 = require('./models/Users6');
// const UserModel6 = require('./models/Users7');
// const UserModel7 = require('./models/Users8');
// const Siva = require('./models/Testing');

// mongoose.connect("mongodb+srv://Author:sivamani@cluster0.mebcwvx.mongodb.net/students")
//     .then(() => {
//         console.log("MongoDB Connected Successfully!");
//     })
//     .catch((error) => {
//         console.log(`${error}`);
//     });
//     // Nodemailer setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'hostelmanagementssystem@gmail.com',
//         pass: 'gjrm tarz sjgg sqtr' // Ensure to keep your credentials secure
//     }
// });

// // Email sending function
// const sendRegistrationEmail = (userEmail, userPassword) => {
//     const mailOptions = {
//         from: 'hostelmanagementsystems@gmail.com',
//         to: userEmail,
//         subject: 'Hostel Management Registration Successful',
//         text: `Thank you for registering with our hostel management system.\n\nYour login credentials are:\nEmail: ${userEmail}\nPassword: ${userPassword}\n\nPlease keep this information secure.`
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent successfully: ' + info.response);
//         }
//     });
// };

// // Registration route with email sending
// app.post('/register', (req, res) => {
//     const { email, password } = req.body;

//     StudentModel.create(req.body)
//         .then(students => {
//             sendRegistrationEmail(email, password); // Send email with credentials
//             res.json(students);
//         })
//         .catch(err => res.json(err));
// });

// // Login route
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     StudentModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (user.password === password) {
//                     res.json("success");
//                 } else {
//                     res.json("The password is not Correct");
//                 }
//             } else {
//                 res.json("No Records Existed");
//             }
//         })
//         .catch(err => res.json(err));
// });

// // // Nodemailer transporter setup
// // var transporter = nodemailer.createTransport({
// //     service: 'gmail',
// //     auth: {
// //         user: 'sivamaniramayanam7036@gmail.com', // your email
// //         pass: 'gjrm tarz sjgg sqtr' // your email password (or app password)
// //     }
// // });

// // // Function to send email
// // const sendInvitationEmail = (userEmail) => {
// //     var mailOptions = {
// //         from: 'sivamaniramayanam7036@gmail.com',
// //         to: userEmail, // Send email to the registered user
// //         subject: 'Hostel Management',
// //         text: 'Thank you for registering for our account'
// //     };

// //     transporter.sendMail(mailOptions, function (error, info) {
// //         if (error) {
// //             console.log(error);
// //         } else {
// //             console.log('Email sent successfully: ' + info.response);
// //         }
// //     });
// // };

// // // Login endpoint
// // app.post('/login', (req, res) => {
// //     const { email, password } = req.body;

// //     StudentModel.findOne({ email: email })
// //         .then(user => {
// //             if (user) {
// //                 if (user.password === password) {
// //                     res.json("success");
// //                 } else {
// //                     res.json("The password is not Correct");
// //                 }
// //             } else {
// //                 res.json("No Records Existed");
// //             }
// //         })
// //         .catch(err => res.json(err));
// // });

// // // Register endpoint
// // app.post('/register', (req, res) => {
// //     StudentModel.create(req.body)
// //         .then(students => {
// //             sendInvitationEmail(students.email); // Send email to the new user's email
// //             res.json(students);
// //         })
// //         .catch(err => res.json(err));
// // });

// // UserModel1 CRUD operations
// app.get('/users1', (req, res) => {
//     UserModel.find({})
//         .then(users => res.json(users))
//         .catch(err => res.json(err));
// });

// app.get('/getUser1/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findById({ _id: id })
//         .then(users => res.json(users))
//         .catch(err => res.json(err));
// });

// app.post('/create1', (req, res) => {
//     UserModel.create(req.body)
//         .then(users => res.json(users))
//         .catch(err => res.json(err));
// });

// app.put('/update1/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findByIdAndUpdate({ _id: id }, { name: req.body.name, rollno: req.body.rollno })
//         .then(users => res.json(users))
//         .catch(err => res.json(err));
// });

// app.delete('/deleteUser1/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel.findByIdAndDelete({ _id: id })
//         .then(res => res.json(res))
//         .catch(err => res.json(err));
// });

// // UserModel2 CRUD operations
// app.get('/users2', (req, res) => {
//     UserModel1.find({})
//         .then(users2 => res.json(users2))
//         .catch(err => res.json(err));
// });

// app.get('/getUser2/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel1.findById({ _id: id })
//         .then(users2 => res.json(users2))
//         .catch(err => res.json(err));
// });

// app.post('/create2', (req, res) => {
//     UserModel1.create(req.body)
//         .then(users2 => res.json(users2))
//         .catch(err => res.json(err));
// });

// app.put('/update2/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel1.findByIdAndUpdate({ _id: id }, { name: req.body.name, rollno: req.body.rollno })
//         .then(users2 => res.json(users2))
//         .catch(err => res.json(err));
// });

// app.delete('/deleteUser2/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel1.findByIdAndDelete({ _id: id })
//         .then(res => res.json(res))
//         .catch(err => res.json(err));
// });

// // UserModel3 CRUD operations
// app.get('/users3', (req, res) => {
//     UserModel2.find({})
//         .then(users3 => res.json(users3))
//         .catch(err => res.json(err));
// });

// app.get('/getUser3/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel2.findById({ _id: id })
//         .then(users2 => res.json(users2))
//         .catch(err => res.json(err));
// });

// app.post('/create3', (req, res) => {
//     UserModel2.create(req.body)
//         .then(users3 => res.json(users3))
//         .catch(err => res.json(err));
// });

// app.put('/update3/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel2.findByIdAndUpdate({ _id: id }, { name: req.body.name, rollno: req.body.rollno })
//         .then(users2 => res.json(users2))
//         .catch(err => res.json(err));
// });

// app.delete('/deleteUser3/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel2.findByIdAndDelete({ _id: id })
//         .then(res => res.json(res))
//         .catch(err => res.json(err));
// });

// // UserModel4 CRUD operations
// app.get('/users4', (req, res) => {
//     UserModel3.find({})
//         .then(users4 => res.json(users4))
//         .catch(err => res.json(err));
// });

// app.get('/getUser4/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel3.findById({ _id: id })
//         .then(users4 => res.json(users4))
//         .catch(err => res.json(err));
// });

// app.post('/create4', (req, res) => {
//     UserModel3.create(req.body)
//         .then(users4 => res.json(users4))
//         .catch(err => res.json(err));
// });

// app.put('/update4/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel3.findByIdAndUpdate({ _id: id }, { name: req.body.name, rollno: req.body.rollno })
//         .then(users4 => res.json(users4))
//         .catch(err => res.json(err));
// });

// app.delete('/deleteUser4/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel3.findByIdAndDelete({ _id: id })
//         .then(res => res.json(res))
//         .catch(err => res.json(err));
// });

// // UserModel5 CRUD operations
// app.get('/users5', (req, res) => {
//     UserModel4.find({})
//         .then(users5 => res.json(users5))
//         .catch(err => res.json(err));
// });

// app.get('/getUser5/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel4.findById({ _id: id })
//         .then(users5 => res.json(users5))
//         .catch(err => res.json(err));
// });

// app.post('/create5', (req, res) => {
//     UserModel4.create(req.body)
//         .then(users5 => res.json(users5))
//         .catch(err => res.json(err));
// });

// app.put('/update5/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel4.findByIdAndUpdate({ _id: id }, { name: req.body.name, rollno: req.body.rollno })
//         .then(users5 => res.json(users5))
//         .catch(err => res.json(err));
// });

// app.delete('/deleteUser5/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel4.findByIdAndDelete({ _id: id })
//         .then(res => res.json(res))
//         .catch(err => res.json(err));
// });

// // UserModel6 CRUD operations
// app.get('/users6', (req, res) => {
//     UserModel5.find({})
//         .then(users6 => res.json(users6))
//         .catch(err => res.json(err));
// });

// app.get('/getUser6/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel5.findById({ _id: id })
//         .then(users6 => res.json(users6))
//         .catch(err => res.json(err));
// });

// app.post('/create6', (req, res) => {
//     UserModel5.create(req.body)
//         .then(users6 => res.json(users6))
//         .catch(err => res.json(err));
// });

// app.put('/update6/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel5.findByIdAndUpdate({ _id: id }, { name: req.body.name, rollno: req.body.rollno })
//         .then(users6 => res.json(users6))
//         .catch(err => res.json(err));
// });

// app.delete('/deleteUser6/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel5.findByIdAndDelete({ _id: id })
//         .then(res => res.json(res))
//         .catch(err => res.json(err));
// });

// // UserModel7 CRUD operations
// app.get('/users7', (req, res) => {
//     UserModel6.find({})
//         .then(users7 => res.json(users7))
//         .catch(err => res.json(err));
// });

// app.get('/getUser7/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel6.findById({ _id: id })
//         .then(users7 => res.json(users7))
//         .catch(err => res.json(err));
// });

// app.post('/create7', (req, res) => {
//     UserModel6.create(req.body)
//         .then(users7 => res.json(users7))
//         .catch(err => res.json(err));
// });

// app.put('/update7/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel6.findByIdAndUpdate({ _id: id }, { name: req.body.name, rollno: req.body.rollno })
//         .then(users7 => res.json(users7))
//         .catch(err => res.json(err));
// });

// app.delete('/deleteUser7/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel6.findByIdAndDelete({ _id: id })
//         .then(res => res.json(res))
//         .catch(err => res.json(err));
// });

// // UserModel8 CRUD operations
// app.get('/users8', (req, res) => {
//     UserModel7.find({})
//         .then(users8 => res.json(users8))
//         .catch(err => res.json(err));
// });

// app.get('/getUser8/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel7.findById({ _id: id })
//         .then(users8 => res.json(users8))
//         .catch(err => res.json(err));
// });

// app.post('/create8', (req, res) => {
//     UserModel7.create(req.body)
//         .then(users8 => res.json(users8))
//         .catch(err => res.json(err));
// });

// app.put('/update8/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel7.findByIdAndUpdate({ _id: id }, { name: req.body.name, rollno: req.body.rollno })
//         .then(users8 => res.json(users8))
//         .catch(err => res.json(err));
// });

// app.delete('/deleteUser8/:id', (req, res) => {
//     const id = req.params.id;
//     UserModel7.findByIdAndDelete({ _id: id })
//         .then(res => res.json(res))
//         .catch(err => res.json(err));
// });

// // Start server
// app.listen(3002, () => {
//     console.log("Server is running");
// });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require('nodemailer'); // Import nodemailer
const app = express();
app.use(express.json());
app.use(cors());

const StudentModel = require('./models/Student');
const UserModel = require('./models/Users1');
const UserModel1 = require('./models/Users2');
const UserModel2 = require('./models/Users3');
const UserModel3 = require('./models/Users4');
const UserModel4 = require('./models/Users5');
const UserModel5 = require('./models/Users6');
const UserModel6 = require('./models/Users7');
const UserModel7 = require('./models/Users8');


mongoose.connect("mongodb+srv://Author:sivamani@cluster0.mebcwvx.mongodb.net/students")
    .then(() => {
        console.log("MongoDB Connected Successfully!");
    })
    .catch((error) => {
        console.log(`${error}`);
    });

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sivamaniramayanam7036@gmail.com',
        pass: 'gjrm tarz sjgg sqtr' // Ensure to keep your credentials secure
    }
});

// Email sending function
const sendRegistrationEmail = (userEmail, userPassword) => {
    const mailOptions = {
        from: 'sivamaniramayanam7036@gmail.com',
        to: userEmail,
        subject: 'Hostel Management Registration Successful',
        text: `Thank you for registering with our hostel management system.\n\nYour login credentials are:\nEmail: ${userEmail}\nPassword: ${userPassword}\n\nPlease keep this information secure.`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent successfully: ' + info.response);
        }
    });
};

const notifyVacancyToStudents = (availableRooms) => {
    // Retrieve all students from the StudentModel
    StudentModel.find({}, 'email') // Only fetch the email field
        .then(students => {
            const emailAddresses = students.map(student => student.email); // Extract email addresses

            // Log the email addresses for debugging
            console.log('Email addresses:', emailAddresses);

            // Check if there are no students to notify
            if (emailAddresses.length === 0) {
                console.log('No students to notify.');
                return;
            }

            // Prepare the email options
            const mailOptions = {
                from: 'sivamaniramayanam7036@gmail.com',
                to: emailAddresses, // Send to all student emails
                subject: `Vacant Rooms Notification`,
                text: availableRooms.length > 0
                    ? `The following rooms have available spots:\n${availableRooms.join('\n')}`
                    : 'No rooms are currently available.'
            };

            // Send email to all students
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending email:', error);
                } else {
                    console.log('Vacancy notification sent to students:', info.response);
                }
            });
        })
        .catch(err => {
            console.log('Error fetching student emails:', err);
        });
};

// Check room vacancies and notify if needed
const checkRoomVacancies = async () => {
    const roomModels = [UserModel, UserModel1, UserModel2, UserModel3, UserModel4, UserModel5, UserModel6, UserModel7];
    const availableRooms = [];
    let allRoomsFull = true; // Flag to check if all rooms are full

    for (const [index, model] of roomModels.entries()) {
        try {
            const count = await model.countDocuments({}); // Get the count of students in the room
            const availableSpots = 4 - count; // Assuming each room can accommodate 4 students

            // Check if the room has less than 4 students
            if (availableSpots > 0) {
                availableRooms.push(`Room ${index + 1}: ${availableSpots} available spots.`);
                allRoomsFull = false; // Set the flag to false if at least one room has available spots
            }
        } catch (err) {
            console.log('Error counting documents in room model:', err);
        }
    }

    // Notify all students if there are available rooms and not all rooms are full
    if (availableRooms.length > 0) {
        notifyVacancyToStudents(availableRooms);
    } else if (allRoomsFull) {
        console.log('All rooms are currently full, no notifications sent.');
    }
};

// Example usage: Call this function periodically or whenever necessary
setInterval(checkRoomVacancies, 3600000); // Check every 60 seconds

// Registration route with email sending
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    StudentModel.create(req.body)
        .then(students => {
            sendRegistrationEmail(email, password); // Send email with credentials
            checkRoomVacancies(); // Check room vacancies after registration
            res.json(students);
        })
        .catch(err => res.json(err));
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    StudentModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("The password is not Correct");
                }
            } else {
                res.json("No Records Existed");
            }
        })
        .catch(err => res.json(err));
});

// CRUD operations for UserModel1 to UserModel8 (same as provided)

app.get('/users1', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.get('/getUser1/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.post('/create1', (req, res) => {
    UserModel.create(req.body)
        .then(users => {
            checkRoomVacancies(); // Check vacancies when a new user is created
            res.json(users);
        })
        .catch(err => res.json(err));
});

app.put('/update1/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id }, { name: req.body.name, rollno: req.body.rollno })
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.delete('/deleteUser1/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err));
});
 //room1
    app.get('/users1',(req,res)=>{
        UserModel.find({})
        .then(users=>res.json(users))
        .catch(err=>res.json(err))

    })
    app.get('/getUser/:id',(req,res)=>{
        const id=req.params.id;
        UserModel.findById({_id:id})
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    })
    app.post('/create',(req,res)=>{
        UserModel.create(req.body)
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    })
    app.put('/update/:id',(req,res)=>{
        const id=req.params.id;
        UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser1/:id',(req,res)=>{
        const id=req.params.id;
        UserModel.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    // room2
    app.get('/users2',(req,res)=>{
        UserModel1.find({})
        .then(users2=>res.json(users2))
        .catch(err=>res.json(err))

    })
    app.get('/getUser2/:id',(req,res)=>{
        const id=req.params.id;
        UserModel1.findById({_id:id})
        .then(users2=>res.json(users2))
        .catch(err=>res.json(err))
    })
    app.post('/create2',(req,res)=>{
        UserModel1.create(req.body)
        .then(users2=>res.json(users2))
        .catch(err=>res.json(err))
    })
    app.put('/update2/:id',(req,res)=>{
        const id=req.params.id;
        UserModel1.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users2=>res.json(users2))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser2/:id',(req,res)=>{
        const id=req.params.id;
        UserModel1.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    //room3
    app.get('/users3',(req,res)=>{
        UserModel2.find({})
        .then(users3=>res.json(users3))
        .catch(err=>res.json(err))

    })
    app.get('/getUser3/:id',(req,res)=>{
        const id=req.params.id;
        UserModel2.findById({_id:id})
        .then(users2=>res.json(users2))
        .catch(err=>res.json(err))
    })
    app.post('/create3',(req,res)=>{
        UserModel2.create(req.body)
        .then(users3=>res.json(users3))
        .catch(err=>res.json(err))
    })
    app.put('/update3/:id',(req,res)=>{
        const id=req.params.id;
        UserModel2.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users2=>res.json(users2))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser3/:id',(req,res)=>{
        const id=req.params.id;
        UserModel2.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    //room4
    app.get('/users4',(req,res)=>{
        UserModel3.find({})
        .then(users4=>res.json(users4))
        .catch(err=>res.json(err))

    })
    app.get('/getUser4/:id',(req,res)=>{
        const id=req.params.id;
        UserModel3.findById({_id:id})
        .then(users4=>res.json(users4))
        .catch(err=>res.json(err))
    })
    app.post('/create4',(req,res)=>{
        UserModel3.create(req.body)
        .then(users4=>res.json(users4))
        .catch(err=>res.json(err))
    })
    app.put('/update4/:id',(req,res)=>{
        const id=req.params.id;
        UserModel3.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users4=>res.json(users4))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser4/:id',(req,res)=>{
        const id=req.params.id;
        UserModel3.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    //room5
    app.get('/users5',(req,res)=>{
        UserModel4.find({})
        .then(users5=>res.json(users5))
        .catch(err=>res.json(err))

    })
    app.get('/getUser5/:id',(req,res)=>{
        const id=req.params.id;
        UserModel4.findById({_id:id})
        .then(users5=>res.json(users5))
        .catch(err=>res.json(err))
    })
    app.post('/create5',(req,res)=>{
        UserModel4.create(req.body)
        .then(users5=>res.json(users5))
        .catch(err=>res.json(err))
    })
    app.put('/update5/:id',(req,res)=>{
        const id=req.params.id;
        UserModel4.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users5=>res.json(users5))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser5/:id',(req,res)=>{
        const id=req.params.id;
        UserModel4.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    //room6
    app.get('/users6',(req,res)=>{
        UserModel5.find({})
        .then(users6=>res.json(users6))
        .catch(err=>res.json(err))
    })
    app.get('/getUser6/:id',(req,res)=>{
        const id=req.params.id;
        UserModel5.findById({_id:id})
        .then(users6=>res.json(users6))
        .catch(err=>res.json(err))
    })
    app.post('/create6',(req,res)=>{
        UserModel5.create(req.body)
        .then(users6=>res.json(users6))
        .catch(err=>res.json(err))
    })
    app.put('/update6/:id',(req,res)=>{
        const id=req.params.id;
        UserModel5.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users6=>res.json(users6))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser6/:id',(req,res)=>{
        const id=req.params.id;
        UserModel5.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    //room7
    app.get('/users7',(req,res)=>{
        UserModel6.find({})
        .then(users7=>res.json(users7))
        .catch(err=>res.json(err))

    })
    app.get('/getUser7/:id',(req,res)=>{
        const id=req.params.id;
        UserModel6.findById({_id:id})
        .then(users7=>res.json(users7))
        .catch(err=>res.json(err))
    })
    app.post('/create7',(req,res)=>{
        UserModel6.create(req.body)
        .then(users7=>res.json(users7))
        .catch(err=>res.json(err))
    })
    app.put('/update7/:id',(req,res)=>{
        const id=req.params.id;
        UserModel6.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users7=>res.json(users7))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser7/:id',(req,res)=>{
        const id=req.params.id;
        UserModel6.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })
    //room8
    app.post
    app.get('/users8',(req,res)=>{
        UserModel7.find({})
        .then(users7=>res.json(users7))
        .catch(err=>res.json(err))

    })
    app.get('/getUser8/:id',(req,res)=>{
        const id=req.params.id;
        UserModel7.findById({_id:id})
        .then(users8=>res.json(users8))
        .catch(err=>res.json(err))
    })
    app.post('/create8',(req,res)=>{
        UserModel7.create(req.body)
        .then(users8=>res.json(users8))
        .catch(err=>res.json(err))
    })
    app.put('/update8/:id',(req,res)=>{
        const id=req.params.id;
        UserModel7.findByIdAndUpdate({_id:id},{name:req.body.name,rollno:req.body.rollno})
        .then(users8=>res.json(users8))
        .catch(err=>res.json(err))
    })
    app.delete('/deleteUser8/:id',(req,res)=>{
        const id=req.params.id;
        UserModel7.findByIdAndDelete({_id:id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
    })

// Repeat similar CRUD operations for UserModel2 to UserModel8


// Start server
app.listen(3002, () => {
    console.log("Server is running");
});

