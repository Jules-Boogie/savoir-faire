
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email:{type: String, required: true, index: { unique: true }},
    userPhoto:{type: String},
    Date:{
      type: Date,
      default: Date.now
    },
    role:{type:String},
    about:{type:String},
    Location:{type:String},
    password: { type: String, required:true, minlength:6},
   
    favorites:[{ type: Schema.Types.ObjectId, ref: 'Product' }],
    cart:{items: [
      {
      itemId: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
  }]}


  });
  
  const User  = mongoose.model("User", userSchema);
  
  module.exports = User;
  