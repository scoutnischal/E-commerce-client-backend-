const mongooes = require('mongoose');
require('dotenv').config();

module.exports.connDB = async ()=>{
    try{
        const conn = await mongooes.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Succfull DB Connection")
        console.log(`Connect to MongoDB ${conn.connection.host}`);
    }catch(err){
        console.log("Error while connect to DB",err);
    }
};