const router = require("express").Router();
const productRoutes = require("./ProductsApi");

// Post routes
router.use("/users", productRoutes);

module.exports = router;