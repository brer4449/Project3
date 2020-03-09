const router = require("express").Router();

const itemController = require("../../controllers/itemController");

//Matches with /api/items
router
  .route("/")
  .get(itemController.findAll)
  .get(itemController.findCategory)
  .post(itemController.create);

  router.
    route("/?")
    .get(itemController.findCategory);

//Matches with "/api/items/:id"

router
  .route("/:id")
  
//   .update(itemController.update)
  .delete(itemController.remove);

module.exports = router;
