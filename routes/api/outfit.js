const router = require("express").Router();
const outfitsController = require("../../controllers/outfitsController");

// Matches with "/api/outfits"
router.route("/")
  .get(outfitsController.findAll);

// Matches with "/api/outfits/:id"
router
  .route("/:id")
  .get(outfitsController.findById)

module.exports = router;