const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {connDB} = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 5000;

//database config
connDB();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(morgan('dev'));


//routes:
app.use('/api/client',authRoutes);

app.get('/',(req,res)=>{
    res.send("Welcome to Home page!!,Product Display for Customer!!!");
});
app.listen(port,()=>{
    console.log(`Server is started on Port:${port}` );
});