const router = require("express").Router();
const healthCategoryDetails = require("../../controllers/healthCategoryDetails/healthCategoryDetails.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", healthCategoryDetails.getAllhealthCategoryDetails);
router.get("/:id", healthCategoryDetails.singlehealthCategoryDetails);
router.post(
  "/create-healthCategoryDetails/:id",
  singleUpload,
  healthCategoryDetails.createhealthCategoryDetails
);
router.delete("/:id", healthCategoryDetails.deletehealthCategoryDetails);
router.patch(
  "/:id",
  singleUpload,
  healthCategoryDetails.updatehealthCategoryDetails
);

module.exports = router;
