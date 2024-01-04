const router = require("express").Router();
const projectSubCategoryDetails = require("../../controllers/projectSubCategoryDetails/projectSubCategoryDetails.controller");
const auth = require("../../middlewares/auth");
const { multipleUpload, singleUpload } = require("../../middlewares/upload");

router.get("/", projectSubCategoryDetails.getAllProjectSubCategoryDetails);
router.get("/:id", projectSubCategoryDetails.singleProjectSubCategoryDetails);
router.post(
  "/create-projectSubCategory/:projectId/:projectSubCategoryId",
  singleUpload,
  projectSubCategoryDetails.createProjectSubCategoryDetails
);
router.delete(
  "/:id",
  projectSubCategoryDetails.deleteProjectSubCategoryDetails
);
router.patch(
  "/:id",
  singleUpload,
  projectSubCategoryDetails.updateProjectSubCategoryDetails
);

module.exports = router;
