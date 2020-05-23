const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    Name: { type: String, required: true },
    Description: { type: String},
    Price: { type: String, required:true},
    Size:[{type: Number, required:true}],
    Color:{type: String, required: true},
    Image:{type: [String]},
    Quantity: { type: Number, required:true},
    itemType: {type: String, required: true },
    CareInstructions:{type: String, required: true},
    Buyer:[{type: Schema.Types.ObjectId, required:true, ref: 'User'}],
    DateCreated: Date.now()
  });
  
  const Product  = mongoose.model("Product", productSchema);
  
  module.exports = Product;
  