const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    Name: { type: String, required: true },
    Description: { type: String},
    Price: { type: Number, required:true},
    Quantity: { type: Number, required:true},
    Buyer:[{type: Schema.Types.ObjectId, required:true, ref: 'User'}],
    status:{type: Boolean, required:true}
  });
  
  const Product  = mongoose.model("Product", productSchema);
  
  module.exports = Product;
  