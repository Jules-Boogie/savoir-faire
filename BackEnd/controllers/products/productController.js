const db = require("../../models");

module.exports = {

findAllByProducts: function(req, res){
db.Products.find(req.query)
// .sort({ price: -1})
.then(dbResult => res.json(dbResult))
.catch(error => res.status(422).json(error))
},
// create: function(req, res) {
//     db.Products.create(req.body)
//     .then(({_id}) => db.Users.findOneAndUpdate({}, { $push: { products: _id } }, { new: true }))
//       .then(dbResult => res.json(dbResult))
//       .catch(error => res.status(422).json(error));
// },
findAllClothing: function (req,res){
  db.Products.find({ itemType: "clothing"})
  .then(dbResult => res.json(dbResult))
.catch(error => res.status(422).json(error))
},
findAllShoes: function (req,res){
  db.Products.find({ itemType: "shoes"})
  .then(dbResult => res.json(dbResult))
.catch(error => res.status(422).json(error))
},
findAllAccessories: function (req,res){
  db.Products.find({ itemType: "accessories"})
  .then(dbResult => res.json(dbResult))
.catch(error => res.status(422).json(error))
},
findAllSkinCare: function(req,res){
  db.Products.find({ itemType: "skincare"})
  .then(dbResult => res.json(dbResult))
.catch(error => res.status(422).json(error))
},
findAllBeauty: function (req,res){
  db.Products.find({ itemType: "beauty"})
  .then(dbResult => res.json(dbResult))
.catch(error => res.status(422).json(error))
},

create: function(req, res) {
  db.Products
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
update: function(req, res) {
    db.Products.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
findOne: function(req, res){
    db.Products.findById(req.params.id)
    .then(dbResult => res.json(dbResult))
    .catch(error => res.status(422).json(error));
},
remove: function(req, res) {
    db.Products.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
findBuyersofOneProduct: function(req, res){
  db.Products.findOne({_id: req.params.id})
  .populate('Buyer')
  .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
//find the seller and buyer of a product

}