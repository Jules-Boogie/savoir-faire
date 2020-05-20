const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username:{type: String, required: true, index: { unique: true }},
    userPhoto:{type: String},
    password: { type: String, required:true},
    role:{type: String, required:true},
    products:[[{ type: Schema.Types.ObjectId, ref: 'Product' }]],
    orders:[[{ type: Schema.Types.ObjectId, ref: 'Product' }]]
  });
  
  const User  = mongoose.model("User", userSchema);
  
  module.exports = User;
  