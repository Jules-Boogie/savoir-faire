const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    Name: { type: String, required: true },
    Description: { type: String},
    Price: { type: Number, required:true},
    Brand:{type: String, required:true},
    status:{type: Boolean, required:true}
  });
  
  const Product  = mongoose.model("Product", productsSchema);
  
  module.exports = Product;
  