const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email:{type: String, required: true, index: { unique: true }},
    userPhoto:{type: String},
    password: { type: String, required:true},
    role:{type: String, required:true},
    favorites:[[{ type: Schema.Types.ObjectId, ref: 'Product' }]],
    cart:{items: [
      {
      item: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
  }]}


  });
  
  const User  = mongoose.model("User", userSchema);
  
  module.exports = User;
  