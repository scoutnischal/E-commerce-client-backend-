const  hasher  = require('../../helpers/hasher');
const userModel = require('../../models/clientModel');
const JWT = require('jsonwebtoken');

const updateUser = async(req,res,next)=>{
    try {
        let id = req.params.id;
        const {username,password,email,phone,address} = req.body;
        const user = await userModel.findById(id);
        //password check req.user._id
        if(password && password.length < 8){
            return res.json({error:'Password is required and 8 character long'});
        }
        const hashedPassword = password ? await  hasher.hashPassword(password) : undefined;
        const updateUser = await userModel.findByIdAndUpdate(id,{
            username : username || user.username,
            password : hashedPassword || user.password,
            email : email || user.email,
            phone : phone || user.phone,
            address : address || user.address

        },{new:true});
        res.status(200).send({
            success:true,
            message : "Successfully update your details",updateUser
        });
    } catch (error) {
        res.status(400).send({
            success : false,
            message : "Error While Update the user profile",
            error
        })
        console.log("Error in user Update file",error);
    }
}
module.exports = updateUser;


// 63ff0ec3fd3b2ad077537b8c
// firstname
// :
// "Bablu"
// lastname
// :
// "Thapa"
// email
// :
// "bablu@gmail.com"
// username
// :
// "bablu"
// password
// :
// "$2b$08$4cKyY8HBGm/Uw84R1ujn/.nJLfr0Qm33o10rgCw//c6xOSib/yK1a"
// phone
// :
// "9874585256"
// address
// :
// "Maru"