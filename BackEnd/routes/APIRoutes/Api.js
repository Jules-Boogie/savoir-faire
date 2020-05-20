const router = require("express").Router();
const productController = require("../../controllers/products/productController");
const UsersController = require("../../controllers/users/userController");
// Matches with "/api/posts"
router
  .route("/products")
  .get(productController.findAll)
  .post(productController.create);
// Matches with "/api/posts/:id"
router
  .route("/products/:id")
  .get(productController.findOne)
  .put(productController.update)
  .delete(productController.remove);

router
  .route("/")
  .get(UsersController.findAll)
  .post(UsersController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(UsersController.findOne)
  .put(UsersController.update)
  .delete(UsersController.remove);

router
  .route("/:id/products")
  .get(UsersController.findUserProducts)

  
module.exports = router;
