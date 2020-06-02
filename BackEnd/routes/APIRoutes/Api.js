const router = require("express").Router();
const productController = require("../../controllers/products/productController");
const UsersController = require("../../controllers/users/userController");
const CartController = require("../../controllers/ShoppingCart/ShoppingCartController")

router
  .route("/products")

  .get(productController.findAllByProducts)

router
  .route("/products/create")
  .post(productController.create)

router
  .route("/products/clothing")
  .get(productController.findAllClothing)
router
  .route("/products/shoes")
  .get(productController.findAllShoes)
router
  .route("/products/accessories")
  .get(productController.findAllAccessories)


router
  .route("/products/:id")
  .get(productController.findOne)
  .put(productController.update)
  .delete(productController.remove);

router
  .route("/products/:id/comments")
  .post(productController.AddComments)

router
  .route("/products/:id/fans")
  .post(productController.AddFavorites)


router
  .route("/")
  .get(UsersController.findAll)

router
  .route("/signup")
  .post(UsersController.create);

router
  .route("/signin")
  .post(UsersController.Login)


router
  .route("/signin/admin")
  .post(UsersController.LoginAsAdmin);


router
  .route("/:id")
  .get(UsersController.findOne)
  .put(UsersController.update)
  .delete(UsersController.remove);

router
  .route("/:id/wishlist")
  .post(UsersController.AddUserFavorites)
  .put(UsersController.RemoveUserFavorites)

router
  .route("/:id/wishlist/populate")
  .get(UsersController.findUserFavorites)


router
  .route("/:id/cart")
  .get(UsersController.findUserCart)
  .post(UsersController.AddUserCart)
  .put(UsersController.RemoveUserCart)

router
  .route("/:id/cart/populate")
  .get(UsersController.findUserCart)
module.exports = router;
