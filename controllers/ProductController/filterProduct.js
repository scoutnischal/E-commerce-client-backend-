// const productModel = require("../../models/Product");

// // filters all products
//  const productFiltersController = async (req, res) => {
//     try {
//       const { checked, radio } = req.body;
//       let args = {};
//       if (checked.length > 0) args.category = checked;
//       if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
//       const products = await productModel.find(args);
//       res.status(200).send({
//         success: true,
//         products,
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(400).send({
//         success: false,
//         message: "Error WHile Filtering Products",
//         error,
//       });
//     }
//   };

//   module.exports = productFiltersController;