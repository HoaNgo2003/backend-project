const products = require("../../models/product.model");
const filterStatus = require("../../helpers/filterStatus");
const searchStatus = require("../../helpers/searchStatus");
const Product = require("../../models/product.model");
const pagination = require("../../helpers/pagination");
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
 
// done pagination
const countProduct = await Product.countDocuments(find);
  
  const keyword = searchStatus(req.query);
  if(keyword.regex){
    find.title = keyword.regex;
  }
  let objectPanigation = pagination(
    {
      currentPage: 1,
      limitItems: 4
    }, req.query, countProduct
  );
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
  module.exports.changeStatus = async(req, res)=>{
    console.log(req.params);
    const status = req.params.status;
    const id = req.params.id;
    await Product.updateOne({_id: id},{status: status});
    res.redirect('back');
  }
  module.exports.changeMulti= async(req, res)=>{
    const type = req.body.type;
    const ids = req.body.ids.split(",");
    switch(type){
      case "active":
        await Product.updateMany({_id: {
          $in: ids
        }},{status:"active"});
        break;
      case "unactive":
        await Product.updateMany({_id: {
          $in: ids
        }},{status:"unactive"});
        break;
      case "delete":
        await Product.updateMany({_id:{
          $in: ids
        }},{delete:true});
      case "changePosition":
        // await Product.updateMany({_id:id},{

        // })
      default:
        break;
    }
    res.redirect("back");
  }
  module.exports.deleteItem = async(req, res)=>{
    const id = req.params.id;
    await Product.updateOne({_id:id},{delete:true,
      deleteAt:new Date()});
    res.redirect("back");
  }