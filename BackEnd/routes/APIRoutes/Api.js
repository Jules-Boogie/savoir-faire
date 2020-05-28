const router = require("express").Router();
const productController = require("../../controllers/products/productController");
const UsersController = require("../../controllers/users/userController");
const CartController = require("../../controllers/ShoppingCart/ShoppingCartController")

router
  .route("/products")
  .get(productController.findAll)
  .post(productController.create);

router
.route("/:userid/shoppingcart")
.post(CartController.createNewCart);


router
.route("/shoppingcart/:id")
.get(CartController.findOne)
.put(CartController.UpdateQuantity)
.delete(CartController.RemoveItem)
.put(CartController.AddItem)


router
  .route("/products/:id")
  .get(productController.findOne)
  .put(productController.update)
  .delete(productController.remove);

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
  .get(UsersController.findUserProducts)

  
module.exports = router;
