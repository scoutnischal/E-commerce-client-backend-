const JWT = require("jsonwebtoken");
const clientModel = require("../models/clientModel")


//Protected Routes based on token
const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
    req.client = decode;
    next();
  } catch (error) {
    console.log("Error in client token",error);
  }
};

//client or customer acceess
const isClient = async (req, res, next) => {
  try {
    const client = await clientModel.findById(req.client._id);
    if (client.role !== 0) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log("Error in isClient middleware!",error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in client middleware",
    });
  }
};
module.exports = {requireSignIn, isClient}