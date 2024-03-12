const productRoutes = require("./product.route");
const homeRoutes = require("./home.route");
module.exports = (app)=>{
    app.get('/',(req,res)=>{
        res.render("client/pages/home/index");
     })
     app.use("/",homeRoutes);
    app.use("/products",productRoutes);
    
}