const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  name: String,
  price: String,
  inStock: Boolean,
  isCoffe: Boolean,
  volume: String,
  description: String,
});

const Drink = mongoose.model("drink", drinkSchema);
module.exports = Drink;
