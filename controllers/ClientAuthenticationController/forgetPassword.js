const hasher  = require('../../helpers/hasher');
const userModel = require('../../models/clientModel');

const forgotPassword = async (req, res) => {
    try {
      const id = req.params.id;
      const email = req.body.email;
      const newPassword = req.body.newPassword;
      if (!email || !newPassword) {
        return res.status(400).send({ 
            success : false,
            msg: "Email and Password is must be required for changing!!"
        });
      }
      if(newPassword.length < 8){
        return res.json({error:'Password must be 8 character long'});
      }
      //check
      const user = await userModel.findOne({email});
      //validation
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email not Found!",
        });
      }
    //   user._id
      const hashedPassword = await hasher.hashPassword(newPassword);
      await userModel.findByIdAndUpdate(id,{ password: hashedPassword },{new : true});
      res.status(200).send({
        success: true,
        message: "Your Password hasbeen Reset Successfully",
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Something wrong in forgetPassword!!",
        error:error,
      });
      console.log(error);
    }
  };
  module.exports = forgotPassword;