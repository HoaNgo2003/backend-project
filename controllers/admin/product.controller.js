const products = require("../../models/product.model");
const filterStatus = require("../../helpers/filterStatus");
const searchStatus = require("../../helpers/searchStatus");
module.exports.index= async(req, res) => {
  const filterStatus1 = filterStatus(req.query);
  let find = {
    delete: false,
     
  };
  if(req.query.status){
    find.status = req.query.status;
  }
 ///
  const keyword = searchStatus(req.query);
  if(keyword.regex){
    find.title = keyword.regex;
  }
  const product = await products.find(find);
  res.render("admin/pages/products/index.pug", {
      pageTitle: "Trang admin",
      product: product,
      filterStatus: filterStatus1,
      keyword: keyword.keyword
    });
    // res.send("Trang san pham");
  }