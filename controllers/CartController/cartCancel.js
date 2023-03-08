const cartModel = require('../../models/cartModel');

const cartCancel = async(req,res,next)=>{
    try {
        // const cart_id = req.parms.cart_id;
        const cartDelete =await cartModel.deleteOne({_id:req.params.cart_id});
        if(cartDelete){
            return res.status(201).send({
                success:true,
                msg:"Your cart has been Successfully Deleted!!"
             });
        }else{
            return res.status(500).send({
                success:false,
                msg:"Somthing is issue in cartCancel!!"
            });
        }
    } catch (error) {
        console.log('Error in Cart Cancel',error);
        res.status(500).send({
            status : false,
            msg:"error while cart cancel"
        })
    }
}

module.exports = cartCancel;