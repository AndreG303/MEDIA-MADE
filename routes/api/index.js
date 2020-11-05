const router = require("express").Router();
const userRoutes = require("./user");
const outfitRoutes = require("./outfit");

// Outfit routes
router.use("/user", userRoutes);
router.use("/outfits", outfitRoutes);

module.exports = router;
