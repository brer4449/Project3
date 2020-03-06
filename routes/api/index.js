const router = require("express").Router();
const itemRoutes = require("./itemsApi");

// Item routes
router.use("/items", itemRoutes);

module.exports = router;
