const mongoose =require('mongoose')
const Testing=new mongoose.Schema(
    {
        name:String,
        lname:String
    }
)
const Siva=mongoose.model('testing',Testing)
module.exports=Siva