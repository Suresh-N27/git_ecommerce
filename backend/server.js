const express = require('express')
const cors = require('cors');
const connectdb = require('./config/db');
const app = express();
const authRouter = require('./routes/userRoutes')


require('dotenv').config();

app.use(express.json());

app.use(cors());

app.use('/auth',authRouter)


connectdb();

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server running on port 5000");
})




