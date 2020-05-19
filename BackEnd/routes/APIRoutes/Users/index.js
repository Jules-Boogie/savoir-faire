const router = require("express").Router();
const userRoutes = require("./UsersApi");

// Post routes
router.use("/users", userRoutes);

module.exports = router;
