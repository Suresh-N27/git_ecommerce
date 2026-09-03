const jwt = require('jsonwebtoken');
const usermodel = require('../models/userModel');

const protectRoute = async(req,res,next) =>{
    try {
        if(req.headers.authorization && req.headers.authorization.startWith('Bearer')){
            let token = req.headers.authorization.split(' ')[1];
            let verifytoken = await jwt.verify(token,process.env.JWT_SECRECT)
            req.user = await usermodel.findById(verifytoken._id)
            next();
        }else{
            return res.status(400).json({
                message:"No Token"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"some thing went wrong"
        })
    }
}


module.exports = {
    protectRoute
}