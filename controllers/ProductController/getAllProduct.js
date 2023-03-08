const productModel = require("../../models/Product");

//get all products
const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
     // .populate("category")
      .select("-image")  // to make it fast to get all products by removing image details
      .limit(12)  //limit upto 12 products
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      counTotal: products.length,
      message: "All Products ",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting products",
      error: error.message,
    });
  }
};
module.exports = getProductController;