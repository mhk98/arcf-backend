const router = require("express").Router();
const projectSubCategory = require("../../controllers/projectSubCategory/projectSubCategory.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", projectSubCategory.getAllProjectSubCategory);
router.get("/:id", projectSubCategory.singleProjectSubCategory);
router.post(
  "/create-projectSubCategory/:id",
  singleUpload,
  projectSubCategory.createProjectSubCategory
);
router.delete("/:id", projectSubCategory.deleteProjectSubCategory);
router.patch("/:id", singleUpload, projectSubCategory.updateProjectSubCategory);

module.exports = router;
