const productModel = require("../../models/Product");

// get photo
 const productPhotoController = async (req, res) => {
    try {
      const product = await productModel.findById(req.params.pid).select("image");
      if (product.image.data) {
        res.set("Content-type", product.image.contentType);
        return res.status(200).send(product.image.data);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while getting photo",
        error,
      });
    }
  };
  module.exports = productPhotoController;