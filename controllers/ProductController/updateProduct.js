const productModel = require("../../models/Product");

const fs = require("fs"); 
const slugify = require("slugify");

//update products
 const updateProductController = async (req, res) => {
    try {
      const { title, description, price, category, stock, shipping } =
        req.fields;
      const { image } = req.files;
      //Validation
      switch (true) {
        case !title:
          return res.status(500).send({ error: "Name is Required" });
        case !description:
          return res.status(500).send({ error: "Description is Required" });
        case !price:
          return res.status(500).send({ error: "Price is Required" });
        case !category:
          return res.status(500).send({ error: "Category is Required" });
        case !stock:
          return res.status(500).send({ error: "Quantity is Required" });
        case image && image.size > 1000000:
          return res
            .status(500)
            .send({ error: "photo is Required and should be less then 1mb" });
      }
  
      const products = await productModel.findByIdAndUpdate(
        req.params.pid,
        { ...req.fields, slug: slugify(title) },
        { new: true }
      );
      if (image) {
        products.image.data = fs.readFileSync(image.path);
        products.image.contentType = image.type;
      }
      await products.save();
      res.status(201).send({
        success: true,
        message: "Product Updated Successfully",
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in Updating product",
      });
    }
  };
  module.exports = updateProductController;
  