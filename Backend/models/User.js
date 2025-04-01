const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type: String,
        enum: ['Testing', 'Manager', 'TeamLead', 'Developer'], 
        required: true
    }

})

model.exports = mongoose.model('User',userSchema)