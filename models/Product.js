const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {type: String , required: true},
    slug: {
      type: String,
      required: true,
    },
    description: {type: String , required: true},
   
    category: {type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    }, //putting category names into array
    stock: {
      type: Number,
      required: [true, "Please Enter product Stock"],
      maxLength: [4, "Stock cannot exceed 4 characters"],
      default: 1,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    image: {
      data: Buffer,
      contentType: String
    },  // casted to MongoDB's BSON type: binData
    shipping: {
      type: Boolean,
    },
    price: {type: Number, required:true}
  //for current date using createdAt:Date.now() and updatedAt, we can also use which is already in mongooseDB
},{timestamps: true}
);


module.exports = mongoose.model("Product",ProductSchema);