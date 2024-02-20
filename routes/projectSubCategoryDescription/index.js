const router = require("express").Router();
const projectSubCategoryDescription = require("../../controllers/projectSubCategoryDescription/projectSubCategoryDescription.controller");
const auth = require("../../middlewares/auth");
const { multipleUpload } = require("../../middlewares/upload");

router.get(
  "/",
  projectSubCategoryDescription.getAllProjectSubCategoryDescription
);
router.get(
  "/:projectId",
  projectSubCategoryDescription.getSingleProjectAllSubCategory
);
router.get(
  "/:projectId/:subCategoryId",
  projectSubCategoryDescription.singleProjectSubCategoryDescription
);
router.post(
  "/create-projectSubCategoryDescription/:projectId/:subCategoryId",
  multipleUpload,
  projectSubCategoryDescription.createProjectSubCategoryDescription
);
router.delete(
  "/:id",
  projectSubCategoryDescription.deleteProjectSubCategoryDescription
);
router.patch(
  "/:projectId/:subCategoryId",
  multipleUpload,
  projectSubCategoryDescription.updateProjectSubCategoryDescription
);

module.exports = router;
