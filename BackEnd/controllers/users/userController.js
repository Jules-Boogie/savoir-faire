const db = require("../../models");

module.exports = {

  findAll: function (req, res) {
    db.Users.find(req.query)
      .sort({ firstName: -1 })
      .then(dbResult => res.json(dbResult))
      .catch(error => res.status(422).json(error))
  },
  create: function (req, res) {
    db.Users.create(req.body)
      .then(dbResult => res.json(dbResult))
      .catch(error => res.status(422).json(error));

  },
  findOne: function (req, res) {
    db.Users.findById(req.params.id)
      .then(dbResult => res.json(dbResult))
      .catch(error => res.status(422).json(error));
  },
  update: function (req, res) {
    db.Users.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserFavorites: function (req, res) {
    db.Users.findById(req.params.id)
      .populate("favorites")
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  },
  remove: function (req, res) {
    db.Users.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  AddUserOrders: function (req, res) {
    db.Users.findByIdAndUpdate({ _id: req.params.id }, { $push: { orders: req.body } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // AddUserOrders: function (req, res) {
  //   db.Users.findByIdAndUpdate({ _id: req.params.id }, { $push: { orders: req.body.id } }) //ask about this please
  //     //here I am saying that the req.body.id is the id of the product
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  AddUserFavorites: function (req, res) {
    db.Users.findByIdAndUpdate({ _id: req.params.id }, { $push: { favorites: req.body.id } }) //ask about this please
      //here I am saying that the req.body.id is the id of the product
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

  // so we want to take the id of the user and push the id of the product into the orders array? 
}