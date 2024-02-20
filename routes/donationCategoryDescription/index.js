const router = require("express").Router();
const donationCategoryDescription = require("../../controllers/donationCategoryDescription/donationCategoryDescription.controller");

const { multipleUpload } = require("../../middlewares/upload");

router.get("/", donationCategoryDescription.getAllDonationCategoryDescription);
// router.get(
//   "/:projectId",
//   galleryCategoryDescription.getSingleProjectAllSubCategory
// );
// router.get(
//   "/:projectId/:subCategoryId",
//   galleryCategoryDescription.singleGalleryCategoryDescription
// );
router.post(
  "/create-donationCategoryDescription",
  multipleUpload,
  donationCategoryDescription.createDonationCategoryDescription
);
router.delete(
  "/:id",
  donationCategoryDescription.deleteDonationCategoryDescription
);
router.patch(
  "/:id",
  multipleUpload,
  donationCategoryDescription.updateDonationCategoryDescription
);

module.exports = router;
