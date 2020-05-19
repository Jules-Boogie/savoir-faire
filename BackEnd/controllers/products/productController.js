const db = require("../../models");

module.exports = {

findAll: function(req, res){
db.Products.find(req,query)
.sort({ price: -1})
.then(dbResult => res.json(dbResult))
.catch(error => res.status(422).json(error))
},
create: function(req, res) {
    db.Products.create(req.body)
    .then(({_id}) => db.Users.findOneAndUpdate({}, { $push: { products: _id } }, { new: true }))
      .then(dbResult => res.json(dbResult))
      .catch(error => res.status(422).json(error));
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
  }



}