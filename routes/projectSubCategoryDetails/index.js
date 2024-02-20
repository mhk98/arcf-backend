const router = require("express").Router();
const projectSubCategoryDetails = require("../../controllers/projectSubCategoryDetails/projectSubCategoryDetails.controller");
const auth = require("../../middlewares/auth");
const { multipleUpload, doubleUpload } = require("../../middlewares/upload");

router.get("/", projectSubCategoryDetails.getAllProjectSubCategoryDetails);
router.get(
  "/:projectId/:subCategoryId",
  projectSubCategoryDetails.singleProjectSubCategoryDetails
);
router.post(
  "/create-projectSubCategoryDetails/:projectId/:subCategoryId",
  doubleUpload,
  projectSubCategoryDetails.createProjectSubCategoryDetails
);
router.delete(
  "/:id",
  projectSubCategoryDetails.deleteProjectSubCategoryDetails
);
router.patch(
  "/:id",
  doubleUpload,
  projectSubCategoryDetails.updateProjectSubCategoryDetails
);

module.exports = router;
