const productModel = require("../../models/Product");


const fs = require("fs"); 
const slugify = require("slugify");

const createProductController = async (req, res) => {
  try {
    const { title, description, category, stock, ratings, numOfReviews, shipping, price } =
      req.fields;
    const { image } = req.files;
    //Validation
    switch (true) {
      case !title:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case !stock:
        return res.status(500).send({ error: "Quantity is Required" });
      case !ratings:
        return res.status(500).send({ error: "Ratings is Required" });
      case !numOfReviews:
        return res.status(500).send({ error: "Number of Reviews is Required" });
      case image && image.size > 1000000:
        return res.status(500).send({ error: "Photo is Required and should be less then 1mb" });
      case !price:
            return res.status(500).send({ error: "Price is Required" });
    }

    const products = new productModel({ ...req.fields, slug: slugify(title) });
    if (image) {
      products.image.data = fs.readFileSync(image.path);
      products.image.contentType = image.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating product",
    });
  }
};

module.exports = createProductController;