const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    Name: { type: String },
    Description: { type: String},
    Price: { type: Number},
    Size:{type: [String]},
    Color:{type: String},
    Image:{type: [String]},
    Quantity: { type: Number},
    itemType: {type: String },
    Care:{type: String},
    Fans:[{type: Schema.Types.ObjectId, ref: 'User'}],
    Buyer:[{type: Schema.Types.ObjectId, ref: 'User'}],
    Orders:{type: Number},
    Comments:{type:[String]},
    Date:{
      type: Date,
      default: Date.now
    },
   
  });
  
  const Product  = mongoose.model("Product", productSchema);
  
  module.exports = Product;
  