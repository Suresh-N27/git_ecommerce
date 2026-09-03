const express = require("express")
const {registeruser} = require('../controllers/userController')
const router = express.Router()

router.post('/register',registeruser)