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
      .then(dbResult => res.json(dbResult))
      .catch(error => res.status(422).json(error));
},
findOne:









}