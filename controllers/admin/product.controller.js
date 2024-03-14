const products = require("../../models/product.model");
module.exports.index= async(req, res) => {
  let filterStatus = [
    {
      name: "tat ca",
      status: "",
      class: ""
    },
    {
      name:"hoat dong",
      status:"active",
      class:""
    },
    {
      name:"dung hoat dong",
      status: "unactive",
      class:""
    }
  ];
  let find = {
    delete: false,
  };
  if(req.query.status){
    find.status = req.query.status;
  }
  if(req.query.status){
    const index = filterStatus.findIndex(item=>item.status== req.query.status);
    filterStatus[index].class="active";
  }else{
    const index = filterStatus.findIndex(item=>item.status== "");
    filterStatus[index].class="active";
  }
  const product = await products.find(find);
  res.render("admin/pages/products/index.pug", {
      pageTitle: "Trang admin",
      product: product,
      filterStatus: filterStatus
    });
    // res.send("Trang san pham");
  }