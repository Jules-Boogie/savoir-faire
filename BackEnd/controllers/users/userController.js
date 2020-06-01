const db = require("../../models");
const Bcryptjs = require('bcrypt') 
const  Webtoken = require('jsonwebtoken')
const stripe = require("stripe")("pk_test_iK19GKRzDqf6jC9VV4zc0Yz700sdbIE3Ys")

module.exports = {

  findAll: function (req, res) {
    db.Users.find(req.query)
      .sort({ firstName: -1 })
      .then(dbResult => res.json(dbResult))
      .catch(error => res.status(422).json(error))
  },
  create: function (req, res) {
    console.log(req.body)
    const { firstName, lastName, email, password } = req.body
    Bcryptjs.hash(password, 10, function(err, hash){
      if(err) throw err;
      db.Users.create({
        email: email,
        password: hash,
        firstName:firstName,
        lastName:lastName
      })
    
        .then(dbResult =>{
          let signupToken = Webtoken.sign({ email: dbResult.email }, 'test sugar', {expiresIn: '1h'})
          res.json({userId:dbResult.id, token:signupToken})
          
        }) 
        .catch(error => res.status(422).json(error));

      }
    
    )
  },

  
  Login: function (req, res) {
    const { email, password } = req.body;

    db.Users.findOne({email:email})

      .then(dbResult => {
        console.log(dbResult);
        if (dbResult === null) {
          res.json(false)
        }
        (Bcryptjs.compare(password, dbResult.password, function (err, result) {
          if (err) throw err;
          if (result) {
            console.log("yass")
            let signinToken = Webtoken.sign({ email: dbResult.email }, 'gosister', {expiresIn: '1h'})
            res.json({userId:dbResult._id, token: signinToken })
              
          }
        }))

      })
      .catch(error => res.status(422).json(error));
  },

  LoginAsAdmin: function (req, res) {
    const { email, password } = req.body;

    db.Users.findOne({role:"admin", email:email})

      .then(dbResult => {
        // console.log(dbResult);
        if (dbResult === null) {
          res.json(false)
        }
        else {let adminToken = Webtoken.sign({ email: dbResult.email }, 'test sugar', {expiresIn: '1h'})
            res.json({userId:dbResult._id, token: adminToken })
              // console.log(signinToken)
          }
        }
        )

      
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
    // console.log(req.body)
    db.Users.findById(req.params.id)
      .populate("favorites")
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  },
  findUserCart: function (req, res) {
    // console.log(req.body)
    // console.log(req.params)
    db.Users.findById(req.params.id)
      .populate("cart.items.itemId")
     
      .then(dbuser => {
        res.json(dbuser);
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
  // AddUserOrders: function (req, res) {
  //   db.Users.findByIdAndUpdate({ _id: req.params.id }, { $push: { orders: req.body } })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  AddUserCart: function (req, res) {
    console.log(req.params.id)
    console.log(req.body.cartObject)
    db.Users.findByIdAndUpdate({ _id: req.params.id }, { $push: { "cart.items": req.body.cartObject} }) //ask about this please
      //here I am saying that the req.body.id is the id of the product
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  AddUserFavorites: function (req, res) {
     console.log(req.params.id)
    // console.log(req.body.id)
    db.Users.findByIdAndUpdate({ _id: req.params.id }, { $push: { favorites: req.body.id} }) //ask about this please
      //here I am saying that the req.body.id is the id of the product
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  RemoveUserFavorites: function (req, res) {
    console.log(req.body)
    console.log(req.params.id)
    // db.Users.findByIdAndUpdate({ _id: req.params.id }, { $pull: { favorites: req.body.id } }) //ask about this please
    //   //here I am saying that the req.body.id is the id of the product
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  RemoveUserCart: function (req, res) {
    console.log(req.body.prodid)
    console.log(req.params.id)
    db.Users.findByIdAndUpdate({ _id: req.params.id }, { $pull: { "cart.items": {itemId: req.body.prodid }} }) //ask about this please
      //here I am saying that the req.body is the id of the product i want to pull from the array
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // so we want to take the id of the user and push the id of the product into the orders array? 
}