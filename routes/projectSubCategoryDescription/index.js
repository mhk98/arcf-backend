const router = require("express").Router();
const projectSubCategoryDescription = require("../../controllers/projectSubCategoryDescription/projectSubCategoryDescription.controller");
const auth = require("../../middlewares/auth");
const { multipleUpload } = require("../../middlewares/upload");

router.get(
  "/",
  projectSubCategoryDescription.getAllProjectSubCategoryDescription
);
router.get(
  "/:id",
  projectSubCategoryDescription.singleProjectSubCategoryDescription
);
router.post(
  "/create-projectSubCategoryDescription/:projectId/:subcategoryId",
  multipleUpload,
  projectSubCategoryDescription.createProjectSubCategoryDescription
);
router.delete(
  "/:id",
  projectSubCategoryDescription.deleteProjectSubCategoryDescription
);
router.patch(
  "/:projectId/:subcategoryId",
  multipleUpload,
  projectSubCategoryDescription.updateProjectSubCategoryDescription
);

module.exports = router;
