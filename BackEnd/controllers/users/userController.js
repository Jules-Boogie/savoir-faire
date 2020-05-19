const db = require("../../models");

module.exports = {

findAll: function(req, res){
db.Users.find(req,query)
.sort({ firstName: -1})
.then(dbResult => res.json(dbResult))
.catch(error => res.status(422).json(error))
},
create: function(req, res) {
    db.Users.create(req.body)
    .then(dbResult => res.json(dbResult))
    .catch(error => res.status(422).json(error));
  
},
findOne: 









}