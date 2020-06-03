# Savoire Faire
Welcome to this repository!


## Introduction 
Savoire Faire is an Ecommerce application that has the user(buyer) interface and the Admin(seller) interface. The admin is able to add or remove products. The admin is also able to view all users that have signed up to the account.
The buyer can view product details, add products to cart or save products to buy later. The user is also able to add comments or review a products. The application also has a fun "lifestyle" section that users can use to create meal plans expore different topics. The application was built with React, Bootstrap, Mongodb, Express, and Nodejs. 


### Deployed Link 




### Technologies Used
| Technologies | Description  |
|---------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------:|
| [Nodejs](https://nodejs.org/en/docs/)                                     |             Node.js is designed to build scalable network applications.                 |
| [React](https://reactjs.org/)                |   A declarative, component based Javascript library for building interactive user interface                 |
| [MongoDB](https://www.mongodb.com/)                |   NoSql database that stores data in JSON-like documents.                |
| [Mongoose](https://mongoosejs.com/)                |  Mongoose lets us model the data for mongodb.                |




### Installation Procedure
$ npx create-react-app <myappname>
$ npm axios
$ npm mongoose
$ npm express


### Application Photos






### Code Highlights

```
.route("/products/:id/fans")
.post(productController.AddFavorites)

.route("/:id/wishlist")
.post(UsersController.AddUserFavorites)

 addtoFavorite: function(id, favData){
       return axios.post("/api/users/" + id + "/wishlist" , favData)
    },

saveProductFans: function(id, itemData) {
    return axios.post("/api/users/products/" + id + "/fans", itemData);
  },

//handling the 
const handleFavoriteBtn = (userid) => {
        console.log("add favorite button works")
        APIu.addtoFavorite(userid, {id})
        API.saveProductFans(id,{userid})
        setShow(true)

    }
    
     clickedfav={()=>handleFavoriteBtn(authenticate.userId)}
     
     AddUserFavorites: function (req, res) {
    console.log(req.params.id)
    // console.log(req.body.id)
    db.Users.findByIdAndUpdate({ _id: req.params.id }, { $push: { favorites: req.body.id } }) //ask about this please
      //here I am saying that the req.body.id is the id of the product
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  AddFavorites: function(req,res){
  console.log(req.params.id)
    console.log(req.body)
  db.Products.findByIdAndUpdate({_id:req.params.id}, {$push: {Fans:req.body.userid} })
  .then(dbResult => res.json(dbResult))
  .catch(error => res.status(422).json(error));
},
     

```


## Clone Repository
 - Clone this repo to your local machine using ```git@github.com:Jules-Boogie/savoir-faire.git ``` with terminal in the directory of your choice. 



## Contact Information
*** Juliet George   
https://www.linkedin.com/in/juliet-george-864950b8/
https://github.com/Jules-Boogie 


## Presentation 
https://docs.google.com/presentation/d/1TyN_6RW8DOch1RpPbli28NtB-aBuidRL7bwjllrGBu0/edit
