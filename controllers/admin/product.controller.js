const products = require("../../models/product.model");
const filterStatus = require("../../helpers/filterStatus");
const searchStatus = require("../../helpers/searchStatus");
const Product = require("../../models/product.model");
module.exports.index= async(req, res) => {
  const filterStatus1 = filterStatus(req.query);
  let find = {
    delete: false,
     
  };
  if(req.query.status){
    find.status = req.query.status;
  }
 ///
//  pagination
  let objectPanigation = {
    limitItems: 4,
    currentPage: 1
  }
// done pagination
  if(req.query.page){
    objectPanigation.currentPage = parseInt(req.query.page);
  }
  objectPanigation.skip = (objectPanigation.currentPage-1)*objectPanigation.limitItems;
  const keyword = searchStatus(req.query);
  if(keyword.regex){
    find.title = keyword.regex;
  }
  const countProduct = await Product.countDocuments(find);
  const totalPage = Math.ceil(countProduct/objectPanigation.limitItems);
  objectPanigation.totalPage = totalPage;
  const product = await products.find(find).limit(objectPanigation.limitItems).skip(objectPanigation.skip);
  res.render("admin/pages/products/index.pug", {
      pageTitle: "Trang admin",
      product: product,
      filterStatus: filterStatus1,
      keyword: keyword.keyword,
      pagination: objectPanigation
    });
    // res.send("Trang san pham");
  }