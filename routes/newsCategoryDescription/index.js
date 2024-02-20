const router = require("express").Router();
const newsCategoryDescription = require("../../controllers/newsCategoryDescription/newsCategoryDescription.controller");
const auth = require("../../middlewares/auth");
const { multipleUpload } = require("../../middlewares/upload");

router.get("/", newsCategoryDescription.getAllNewsCategoryDescription);
router.get("/:id", newsCategoryDescription.singleNewsCategoryDescription);

router.post(
  "/create-newsCategoryDescription/:id/",
  multipleUpload,
  newsCategoryDescription.createNewsCategoryDescription
);
router.delete("/:id", newsCategoryDescription.deleteNewsCategoryDescription);
router.patch(
  "/:id",
  multipleUpload,
  newsCategoryDescription.updateNewsCategoryDescription
);

module.exports = router;
