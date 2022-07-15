const mongoose = require("mongoose");

//Create Schema 
//Time stamps are object in schema
const ProductSchema = new mongoose.Schema({
    title: String,
    price: String,
    description: String,
},
{ timestamps: true}
);

//Define model
const Product = mongoose.model("Product", ProductSchema);

//Export model
module.exports = Product;