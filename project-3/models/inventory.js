const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
