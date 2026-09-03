
const usermodel = require("../models/userModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const registeruser = async(req,res) => {
    try {
        const {name,email,password} = req.body;

        if(!name || !email || !password){
              return res.status(400).json({
                message: "Name, email and password are required"
            });
        }   

        let checkemail = await usermodel.findOne({ email });

        if(checkemail){
            return res.status(400).json({
                message: "Email already exists"
            })
        }

        const hashedpass = await bcrypt.hash(password,10)

        let createuser = await usermodel.create({
            email:email,
            password:hashedpass,
            name:name
        })

        let token = createToken(createuser._id)

        return res.status(200).json({
            createuser,
            token,
            "message":"User Created Successfull"
        })

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Something went wrong. Please try again."
        });
    }
}


const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRECT,{expiresIn:"7d"})
}




module.exports = {
    registeruser
}
