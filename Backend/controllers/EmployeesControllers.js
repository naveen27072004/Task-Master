const user = require('../models/User');


const GetAllUser = async(req,res)=>{
    const loggedInYserTeam = req.userTeam
    
    const employees = await user.find({teamname:loggedInYserTeam})
    return res.status(200).json({
        message:"All User",
        data:employees
    })
}

module.exports = {
    GetAllUser
}