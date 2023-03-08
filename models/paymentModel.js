const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    payment_type: {
        type: String, 
        required: true,
        default : "Cash on Delivery"
    },
    user_Id:{
        type: String,
        required: true
    },
    order_Id: { 
        type: String, 
        required: true 
    },
    amount: { 
        type: Number,
        required: true 
    },
    status: { 
        type: String, 
        default: "pending"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("payment", PaymentSchema);