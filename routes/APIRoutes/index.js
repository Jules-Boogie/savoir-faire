const router = require("express").Router();
const allRoutes = require("./Api")


// Post routes

router.use("/users", allRoutes);


module.exports = router;



// Post routes


