# Savoire Faire
Welcome to this repository!


## Introduction 
Savoire Faire is an Ecommerce application that has the user(buyer) interface and the Admin(seller) interface. The admin is able to add or remove products. The admin is also able to view all users that have signed up to the account.
The buyer can view product details, add products to cart or save products to buy later. The user is also able to add comments or review a products. The application also has a fun "lifestyle" section that users can use to create meal plans expore different topics. The application was built with React, Bootstrap, Mongodb, Express, and Nodejs. 


### Deployed Link 
https://savoire-faire.herokuapp.com/

### How to use
Click Authenticate and Sign up to access user interface

To sign in as admin, click admin and sign in using the details below:

"email" : "justina@gmail.com",

 "password" : "1234567"
 

When signed in as user, you can click on an item to see details, 
you can add item to cart, add item to wishlist, and customer testimonials. You can go to wishlist and cart, and remove items from there. 


After signing up, users have access to the lifestyle session which is still under construction. Right now it shows information about wine and recipes. I look forward to adding more fashion related items in lifestyle session. 



When signed in as an admin, you can add and remove items. You can see a list of users that have been signed up to use the app. 




### Technologies Used
| Technologies | Description  |
|---------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------:|
| [Nodejs](https://nodejs.org/en/docs/)                                     |             Node.js is designed to build scalable network applications.                 |
| [React](https://reactjs.org/)                |   A declarative, component based Javascript library for building interactive user interface                 |
| [MongoDB](https://www.mongodb.com/)                |   NoSql database that stores data in JSON-like documents.                |
| [Mongoose](https://mongoosejs.com/)                |  Mongoose lets us model the data for mongodb.                |
| [Json Web Token](https://jwt.io/)                |  This was used to generate a token that is saved in the server and sent to the client side and passed into the login function.               |
| [Bcrypt](https://www.npmjs.com/package/bcrypt)                |  NPM package used to encrypt password before saving to database               |




### Installation Procedure
$ npx create-react-app <myappname>
$ npm axios
$ npm mongoose
$ npm express


### Application Photos

Before Login a user would see this screen:
![App Photo](https://github.com/Jules-Boogie/savoir-faire/blob/master/client/public/app%20photos/before%20login.PNG)

After Login 
![App Photo](https://github.com/Jules-Boogie/savoir-faire/blob/master/client/public/app%20photos/afterlogin.PNG)

How Items are displayed on the site:
![App Photo](https://github.com/Jules-Boogie/savoir-faire/blob/master/client/public/app%20photos/items.PNG)

The Project Details page with likes, a slide show of images and comments 
![App Photo](https://github.com/Jules-Boogie/savoir-faire/blob/master/client/public/app%20photos/productdetail.PNG)

![App Photo](https://github.com/Jules-Boogie/savoir-faire/blob/master/client/public/app%20photos/photoslidescommentreviewsession.PNG)

Wishlist
![App Photo](https://github.com/Jules-Boogie/savoir-faire/blob/master/client/public/app%20photos/wishlistpage.PNG)


Shopping Cart
![App Photo](https://github.com/Jules-Boogie/savoir-faire/blob/master/client/public/app%20photos/cart.PNG)

![App Photo](https://github.com/Jules-Boogie/savoir-faire/blob/master/client/public/app%20photos/shoppingcart.PNG)





## Code Highlights

### Adding an Item to the like list
 The code below shows all the steps it takes to add an item to a user's wishlist from the Backend to the Frontend. 
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

### Authenticating a new user
#### Context API
```

const AuthenticationContext = React.createContext({
    isLoggedIn: false,
    userId: null,
    token: null,
    login: () => {},
    logout: () => {},
    isAdmin:false,
    adminLogin: () => {},
    adminLogout: () => {}
})

export default AuthenticationContext;

```


#### React

```
const signupSubmithandler = (event) => {
    event.preventDefault()
    console.log(formdata.firstname)

    // const hashedpassword = Bcryptjs.hash(inputState.password, 10)
    API.addUser({
      firstName: formdata.firstname,
      password: formdata.password,
      lastName: formdata.lastname,
      email: formdata.email
    })
      .then(res => {
        authenticate.login(res.data.userId, res.data.token)
      }
      )


    // const signupToken = Webtoken.sign({email: inputState.email}, 'test')
    // .then(res.json({email: inputState.email, token:signupToken}))
  }


```
#### User Controller (Backend)

```
create: function (req, res) {
    console.log(req.body)
    const { firstName, lastName, email, password } = req.body
    Bcryptjs.hash(password, 10, function (err, hash) {
      if (err) throw err;
      db.Users.create({
        email: email,
        password: hash,
        firstName: firstName,
        lastName: lastName
      })

        .then(dbResult => {
          let signupToken = Webtoken.sign({ email: dbResult.email }, 'test sugar', { expiresIn: '1h' })
          res.json({ userId: dbResult.id, token: signupToken })

        })
        .catch(error => res.status(422).json(error));

    }

    )
  },


  Login: function (req, res) {
    const { email, password } = req.body;

    db.Users.findOne({ email: email })

      .then(dbResult => {
        console.log(dbResult);
        if (dbResult === null) {
          res.json(false)
        }
        (Bcryptjs.compare(password, dbResult.password, function (err, result) {
          if (err) throw err;
          if (result) {
            console.log("yass")
            let signinToken = Webtoken.sign({ email: dbResult.email }, 'gosister', { expiresIn: '1h' })
            res.json({ userId: dbResult._id, token: signinToken })

          }
        }))

      })
      .catch(error => res.status(422).json(error));
  },
```



#### API
```
router
  .route("/signup")
  .post(UsersController.create);

router
  .route("/signin")
  .post(UsersController.Login)
  
  ```

### Authenticating an administrator

#### React

```
 const adminSubmithandler = (event) => {
    event.preventDefault()
    console.log("clicked")

    API.LoginAdmin({
      email: formdata.email,
      password:formdata.password
    })
    .then(res => {setUser(res.data) 
      console.log(res.data)
       authenticate.adminLogin(res.data.adminId, res.data.token)
    })
     .catch(err => console.log(err))
  }


```
### User Controller (Backend)
```
 LoginAsAdmin: function (req, res) {
    const { email, password } = req.body;
    db.Users.findOne({ role: "admin", email: email })
      .then(dbResult => {
        // console.log(dbResult);
        if (dbResult) {
          let adminToken = Webtoken.sign({ email: dbResult.email }, 'testsugar', { expiresIn: '1h' })
          res.json({ adminId: dbResult._id, token: adminToken })
          // console.log(signinToken)

        }


      }
      )


      .catch(error => res.status(422).json(error));
  }

```


#### API 
```
router
  .route("/signin/admin")
  .post(UsersController.LoginAsAdmin);
```


## Future Development
 This application was initially built in 2 weeks as a solo project and therefore, has some little quirks that can be fixed with time and practice. To further develop my application, I will add Google Pay and I will improve the user experience. 


## Clone Repository
 - Clone this repo to your local machine using ```git@github.com:Jules-Boogie/savoir-faire.git ``` with terminal in the directory of your choice. 



## Contact Information
*** Juliet George   
https://www.linkedin.com/in/juliet-george-864950b8/
https://github.com/Jules-Boogie 


## Presentation 
https://docs.google.com/presentation/d/1TyN_6RW8DOch1RpPbli28NtB-aBuidRL7bwjllrGBu0/edit
