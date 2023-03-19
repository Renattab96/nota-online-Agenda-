const jwt = require ("jsonwebtoken")
const SECRET = process.env.SECRET_KEY

module.exports.authenticate = (req , res , next) => {
    console.log("Cookies", req.cookies.userToken)
    jwt.verify(req.cookies.userToken.SECRET,(err,payload)=>{
        if (err){
            console.log ("Autenticacion Erronea ", err)
            res.status(401).json({verified:false})
        }else{
            console.log ("Autenticacion ")
            next()
        }


    })

}