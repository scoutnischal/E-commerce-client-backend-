const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    // order_Id: {type: Number, required: true, unique: true},
    user_Id: { type: String, required: true },
    products:
      {
        product_Id: {
          type: String,
        },
        product_Title:{//product_Title
          type : String
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    amount: { 
      type: Number,
       required: true 
    },
    user_phone :{
      type: String,
      require : true
    },
    address: { 
      type: Object, 
      required: true 
    },
    status: { 
      type: String,
       default: "pending"
   },
  },{ timestamps: true }
);
module.exports = mongoose.model("Order", OrderSchema);
