const userSchema =  require('../models/User')
const bcrypt = require('bcryptjs') 
const jwt = require('jsonwebtoken')

const newUser = async(req,res) =>{
    const {name,email,password,role,teamname} = req.body

    console.log(req.body)

    if(!name || !email || !password || !role || !teamname){
        return res.status(400).json({
            message:"All Field Are Required"
        })
    }

    const uniqueuser = await userSchema.findOne({email:email})
    if(uniqueuser){
        return res.status(400).json({
            message:"User Alredy Exites"
        })
    }
    const hashpass = await bcrypt.hash(password,10)

    const newuser = new userSchema({
        name,email,password:hashpass,role,teamname
    })
    await newuser.save()

    return res.status(200).json({
        message:"User Created Successfully",
        data:newuser
    })

}

const login = async(req,res) =>{
    const {email,password} = req.body

    if(!email || !password){
        res.status(400).json({
            message:"All Field Are Required"
        })
    }

    const user = await userSchema.findOne({email:email})
    if(!user){
        return res.status(400).json({
            message:"User Not Found"
        })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if(!passwordMatch){
        return res.status(400).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({userId:user._id,userTeam:user.teamname},process.env.JWT_SECRET_Key,{expiresIn:'1h'})

    return res.status(200).json({
        message:"User Logged In Successfully",
        token:token,
        user:user
    })
}


module.exports = {
    newUser,
    login
}