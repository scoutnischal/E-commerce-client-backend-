//const userModel = require('../../models/userModel');
const paymentModel = require('../../models/paymentModel');

const payment = async(req,res,next)=>{
    try {
        const user_Id = req.params.id;
        const order_Id = req.params.order_id;
        const {payment_type, amount} =req.body;
        const userPayment =await new paymentModel({
            user_Id: user_Id,
            order_Id: order_Id,
            payment_type : payment_type, 
            order_Id : order_Id,
            amount :  amount,
        }).save()
        if(userPayment){
            console.log("Successfully User Payment!");
            console.log("Payment Details:",userPayment);
            return res.status(201).send({
                success:true,
                message:"User hasbeen Successfully Payment, Thankyou for Shopping!"
            });
        }else{
            return res.status(500).send({
                success:false,
                message:"User Payment hasbeen Fail!!"
            });
        }
    } catch (error) {
        console.log('Error While user Payment',error);
        res.status(500).send({
            success:false,
            message:'Error While user Payment'
        });
    }
}

module.exports = payment;

/*
{
  "payment_type":"Check Payment",
  "order_Id":"64037ad7aa712188a540a509",
  "amount":"250000"
}
*/