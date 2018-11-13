const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
