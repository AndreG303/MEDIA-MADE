const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./user");
const oufitRoutes = require("./outfits");

// Book routes
router.use("/books", bookRoutes);
router.use("/user", userRoutes);
router.use("/outfits", oufitRoutes);

module.exports = router;
