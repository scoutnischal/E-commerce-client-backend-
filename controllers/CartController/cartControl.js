const cartModel = require('../../models/cartModel');
const productModel = require('../../models/Product');

//user add product into card
const product_insert = async(req,res,next)=>{
    try {
        const product = await productModel
        .findOne({ slug: req.params.slug })
        .select("-photo");
        const user_Id = req.params.id;
        const qty =req.body.quantity;
        const  objData = JSON.parse(JSON.stringify(product));
       
        const addToCart =await new cartModel({
             user_Id : user_Id,
             products : {
                product_Id : objData._id,
                product_Title : objData.title,
                quantity :qty,
             }
        }).save();
        if(addToCart){
            console.log("==================");
            console.log("Cart Details::");
            console.log("user_Id:",user_Id);
            console.log("Product_Id",objData._id);
            console.log("Product Title:",objData.title);
            console.log("Quantity:",qty);
            console.log("Description:",objData.description);
            return res.status(201).send({
                success:true,
                message:"Successfully Product Add to cart"
            });
        }else{
            return res.status(500).send({
                success:false,
                message:"Can't Prodcut Add to cart"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:'something is error in product insert into cart',
            success:false
        })
    }
}  
module.exports = product_insert;


// 63ff0ec3fd3b2ad077537b8c
/*
{
  "cart_Id":"12",
  "products":{
    "product_Id":"01",
    "quantity":3
  }
}
*/

/*
if(data){
            // console.log("Cart Details::",JSON.stringify(data));
            console.log("Cart_ID:",cart_Id,",User_ID:",user_Id);
            // console.log("products:",products);
            console.log(JSON.stringify(data));
            // console.log(products);
            return res.send({
                msg: data
            })
        } 
*/ 