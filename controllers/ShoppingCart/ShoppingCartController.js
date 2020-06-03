const db = require("../../models");

module.exports = {

createNewCart: function (req, res) {
    db.ShoppingCart.create()
      .then(dbResult => res.json(dbResult))
      .catch(error => res.status(422).json(error));

},
findOne: function (req, res) {
    db.ShoppingCart.findById(req.params.id)
      .then(dbResult => res.json(dbResult))
      .catch(error => res.status(422).json(error)); 

}, 
AddItem: function (req, res) {
    db.ShoppingCart.findByIdAndUpdate({ _id: req.params.id }, { $push: { items: req.body } }) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
RemoveItem: function (req, res) {
    db.ShoppingCart.findByIdAndUpdate({ _id: req.params.id }, { $set: { ShoppingCart: {items: req.body} } }) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
DecreaseQuantity: function (req, res) {
    db.ShoppingCart.findByIdAndUpdate({ _id: req.params.id}, { $inc: {"items.$.quantity": -1 }, $position:req.body.id }) 
    //db.ShoppingCart.findByIdAndUpdate({ _id: req.params.id, "items.item":req.body.item }, { $inc: {"items.$.quantity": -1 }}) option 2
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

},
IncreaseQuantity: function (req, res) {
  db.ShoppingCart.findByIdAndUpdate({ _id: req.params.id}, { $inc: {"items.$.quantity": 1 }, $position:req.body.id }) 
  //db.ShoppingCart.findByIdAndUpdate({ _id: req.params.id, "items.item":req.body.item }, { $inc: {"items.$.quantity": 1 }}) option 2
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

},


}