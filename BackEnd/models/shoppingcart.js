const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingCartSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId, required: true, ref: 'User'
    },
    items: [{
        item: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    sold:false


})

//need a totalquantity and totalprice virtual

const shoppingCart = mongoose.model("shoppingCart", shoppingCartSchema);

module.exports = shoppingCart;
