const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./APIRoutes");

// API Routes
router.use("/api", apiRoutes);

// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../../savoire-faire/public/index.html"));
//   });
  
  
module.exports = router;