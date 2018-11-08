const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  service: { type: String, required: true },
  description: { type: String, required: true },
  untits_in: Number,
  units_out: Number
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
