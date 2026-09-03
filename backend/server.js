const express = require('express')
const cors = require('cors');
const connectdb = require('./config/db');
const { registeruser } = require('./controllers/userController');
const app = express();


require('dotenv').config();

app.use(express.json());

app.use(cors());

app.use('/auth',registeruser)

connectdb();

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server running on port 5000");
})




