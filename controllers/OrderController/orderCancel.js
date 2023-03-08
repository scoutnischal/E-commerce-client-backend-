const orderModel = require('../../models/orderModel');

const orderCancel = async(req,res,next)=>{
    try {
        const order_Id = req.params.order_id;
        const deleteOrder =await orderModel.deleteOne({_id:order_Id});
        if(deleteOrder){
            return res.status(201).send({
                success:true,
                msg:"Your Order has been Successfully Deleted!!"
             });
        }else{
            return res.status(500).send({
                success:false,
                msg:"Somthing is issue in orderCancel!!"
            });
        }
    } catch (error) {
        console.log("Error in OrderCancel",error);
        res.status(500).send({
            success : false,
            msg:"Error while OrderCancel",
            Error: error
        });
    }
}
module.exports = orderCancel;