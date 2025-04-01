const jwt = require('jsonwebtoken')

const getteamuser = (req,res,next) =>{
    try {
        let token = req.headers.authorization
        if(token){
            token = token.split(' ')[1]
            let user = jwt.verify(token, process.env.JWT_SECRET_Key)
            req.userId = user.userId
            req.userTeam = user.userTeam

            next()
        }else{
            res.status(401).json({
                message:"Unauthorized User"
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}

module.exports = getteamuser