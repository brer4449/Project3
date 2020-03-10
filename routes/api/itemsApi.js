const router = require("express").Router();

const itemController = require("../../controllers/itemController");

//Matches with /api/items
router
  .route("/")
  .get(itemController.findAll)
  //can't have more than 1 of the same CRUD type
  // .get(itemController.findCategory)
  .post(itemController.create);

router.
  route("/?")
  .get(itemController.findCategory);

//Matches with "/api/items/:id"


router

  .route("/:id")  
  .put(itemController.update)
  .delete(itemController.remove);

module.exports = router;
