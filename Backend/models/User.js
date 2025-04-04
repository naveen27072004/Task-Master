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
    password:{
        type:String,
        required:true
    },
    role:{
        type: String,
        enum: ['Testing', 'Manager', 'TeamLead', 'Developer'],
        required: true
    },

    teamname:{
        type:String,
        require:true
    } 

})

const User = mongoose.model('User',userSchema)
module.exports = User