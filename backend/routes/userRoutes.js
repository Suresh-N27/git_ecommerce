const express = require("express")

const {registeruser, loginuser, getprofile} = require('../controllers/userController')
const {protectRoute} = require('../middleware/userMiddleware')
const router = express.Router()

router.post('/register',registeruser)

router.post('/login',loginuser)

router.get('/getprofile',protectRoute,getprofile)


module.exports = router