const router = require("express").Router();
const projectSubCategory = require("../../controllers/projectSubCategory/projectSubCategory.controller");
const auth = require("../../middlewares/auth");
const { multipleUpload } = require("../../middlewares/upload");


router.get("/", projectSubCategory.getAllProjectSubCategory);
router.get("/:id", projectSubCategory.singleProjectSubCategory);
router.post(
  "/create-projectSubCategory",
  multipleUpload,
  projectSubCategory.createProjectSubCategory
);
router.delete("/:id", projectSubCategory.deleteProjectSubCategory);
router.patch("/:id", multipleUpload, projectSubCategory.updateProjectSubCategory);

module.exports = router;
