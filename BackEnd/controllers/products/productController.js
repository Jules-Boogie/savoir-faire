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
  
  const { Name, Care, Image, Description, Size, Price, Color} = req.body;
  console.log(Image.split(","))
  const data ={
    "Name":Name, "Care":Care, "Image":Image.split(","), "Description":Description, "Size":Size, "Price":Price, "Color":Color
  }
  console.log(data)
  db.Products.create(data)
    .then(dbModel => res.json(dbModel))
    .catch(err => (err.dbModel));
},
update: function(req, res) {
    db.Products.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},
updateProductAfterCart: function(req, res) {
  db.Products.findOneAndUpdate({ _id: req.params.id }, { $set: {  quantity: req.body.quantity, orders: req.body.orders  } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

findOne: function(req, res){
    db.Products.findById(req.params.id)
    .then(dbResult => res.json(dbResult))
    .catch(error => res.status(422).json(error));
},
remove: function(req, res) {
  console.log(req.body)
  console.log(req.params.id)
    db.Products.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
findBuyersofOneProduct: function(req, res){
  db.Products.findOne({_id: req.params.id})
  .populate('Buyer')
  .then(dbResult => res.json(dbResult))
  .catch(error => res.status(422).json(error));

},
//find the seller and buyer of a product
AddComments: function(req,res){
  console.log(req.params.id + "and" + req.body)
  db.Products.findByIdAndUpdate({_id:req.params.id}, {$push: {Comments:req.body} })
  .then(dbResult => res.json(dbResult))
  .catch(error => res.status(422).json(error));
},
AddFavorites: function(req,res){
  console.log(req.params.id)
    console.log(req.body)
  db.Products.findByIdAndUpdate({_id:req.params.id}, {$push: {Fans:req.body.userid} })
  .then(dbResult => res.json(dbResult))
  .catch(error => res.status(422).json(error));
},

}