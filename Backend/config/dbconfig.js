const mongoose = require('mongoose');
require('dotenv').config()


const connectDb = async()=>{
     const con = await mongoose.connect(process.env.MONGO_URI)
     if(con){
        console.log("mongoDB Connected") 
     }
        else{
            console.log(`MongoDB Connection Failed`) 
        }
}

module.exports = connectDb