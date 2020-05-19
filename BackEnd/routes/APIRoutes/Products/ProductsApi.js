const router = require("express").Router();
const productController = require("../../../controllers/products/productController");

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
module.exports = router;
