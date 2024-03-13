const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        
        title : String,
        description: String, 
        price: Number, 
        discountPercentage: Number, 
        rating: Number, 
        stock: Number, 
        brand: String, 
        category: String, 
        thumbnail:  String,
        status: String,
        delete: Boolean,
        position: Number
    }
);
const products = mongoose.model('Product', productSchema, "products");