const router = require("express").Router();
const galleryCategoryDescription = require("../../controllers/galleryCategoryDescription/galleryCategoryDescription.controller");
const auth = require("../../middlewares/auth");
const { multipleUpload } = require("../../middlewares/upload");

router.get("/", galleryCategoryDescription.getAllGalleryCategoryDescription);
// router.get(
//   "/:projectId",
//   galleryCategoryDescription.getSingleProjectAllSubCategory
// );
// router.get(
//   "/:projectId/:subCategoryId",
//   galleryCategoryDescription.singleGalleryCategoryDescription
// );
router.post(
  "/create-galleryCategoryDescription",
  multipleUpload,
  galleryCategoryDescription.createGalleryCategoryDescription
);
router.delete(
  "/:id",
  galleryCategoryDescription.deleteGalleryCategoryDescription
);
router.patch(
  "/:id",
  multipleUpload,
  galleryCategoryDescription.updateGalleryCategoryDescription
);

module.exports = router;
