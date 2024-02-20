const router = require("express").Router();
const projectSubCategoryDetailsHeader = require("../../controllers/projectSubCategoryDetailsHeader/projectSubCategoryDetailsHeader");
const auth = require("../../middlewares/auth");
const { multipleUpload } = require("../../middlewares/upload");

router.get(
  "/",
  projectSubCategoryDetailsHeader.getAllProjectSubCategoryDetailsHeader
);
router.get(
  "/:id",
  projectSubCategoryDetailsHeader.singleProjectSubCategoryDetailsHeader
);
router.post(
  "/create-projectSubCategoryHeader/:id",
  multipleUpload,
  projectSubCategoryDetailsHeader.createProjectSubCategoryDetailsHeader
);
router.delete(
  "/:id",
  projectSubCategoryDetailsHeader.deleteProjectSubCategoryDetailsHeader
);
router.patch(
  "/:id",
  multipleUpload,
  projectSubCategoryDetailsHeader.updateProjectSubCategoryDetailsHeader
);

module.exports = router;
