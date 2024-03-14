const products = require("../../models/product.model");
module.exports.index= async(req, res) => {
  const product = await products.find({
    delete: false
  });
  console.log(product);
  res.render("admin/pages/products/index.pug", {
      pageTitle: "Trang admin",
      product: product
    });
    // res.send("Trang san pham");
  }