const router = require("express").Router();
const productController = require("../../controllers/products/productController");
const UsersController = require("../../controllers/users/userController");
const CartController = require("../../controllers/ShoppingCart/ShoppingCartController")

router
  .route("/products")
  .get(productController.findAll)
  .post(productController.create);


router
  .route("/products/:id")
  .get(productController.findOne)
  .put(productController.update)
  .delete(productController.remove);

router
  .route("/products/:id/comments")
  .post(productController.AddComments)
  

router
  .route("/")
  .get(UsersController.findAll)
  .post(UsersController.create);


router
  .route("/:id")
  .get(UsersController.findOne)
  .put(UsersController.update)
  .delete(UsersController.remove);

router
  .route("/:id/products")
  .get(UsersController.findUserFavorites)
  .post(UsersController.AddUserFavorites)
  .put(UsersController.RemoveUserFavorites)
router
.route("/:id/cart")
.get(UsersController.findUserCart)
.post(UsersController.AddUserCart)
.put(UsersController.RemoveUserCart)

.route("/:id/cart/populate")
.get(UsersController.findUserCart)
module.exports = router;
