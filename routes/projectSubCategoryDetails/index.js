const router = require("express").Router();
const projectSubCategoryDetails = require("../../controllers/projectSubCategoryDetails/projectSubCategoryDetails.controller");
const auth = require("../../middlewares/auth");
const { multipleUpload } = require("../../middlewares/upload");

router.get("/", projectSubCategoryDetails.getAllProjectSubCategoryDetails);
router.get(
  "/:projectId/:subCategoryId",
  projectSubCategoryDetails.singleProjectSubCategoryDetails
);
router.post(
  "/create-projectSubCategoryDetails/:projectId/:subCategoryId",
  multipleUpload,
  projectSubCategoryDetails.createProjectSubCategoryDetails
);
router.delete(
  "/:id",
  projectSubCategoryDetails.deleteProjectSubCategoryDetails
);
router.patch(
  "/:id",
  multipleUpload,
  projectSubCategoryDetails.updateProjectSubCategoryDetails
);

module.exports = router;
