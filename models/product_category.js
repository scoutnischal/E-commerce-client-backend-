const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, 
      required: true,
      unique: true
    },
    slug: {
      type: String,
      lowercase: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("product_category", CategorySchema);