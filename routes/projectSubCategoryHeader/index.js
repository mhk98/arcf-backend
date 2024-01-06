const router = require("express").Router();
const projectSubCategoryHeader = require("../../controllers/projectSubCategoryHeader/projectSubCategoryHeader.controller");
const auth = require("../../middlewares/auth");
const { multipleUpload } = require("../../middlewares/upload");

router.get("/", projectSubCategoryHeader.getAllProjectSubCategoryHeader);
router.get("/:id", projectSubCategoryHeader.singleProjectSubCategoryHeader);
router.post(
  "/create-projectSubCategoryHeader/:id",
  multipleUpload,
  projectSubCategoryHeader.createProjectSubCategoryHeader
);
router.delete("/:id", projectSubCategoryHeader.deleteProjectSubCategoryHeader);
router.patch(
  "/:id",
  multipleUpload,
  projectSubCategoryHeader.updateProjectSubCategoryHeader
);

module.exports = router;
