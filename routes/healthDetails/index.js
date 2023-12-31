const router = require("express").Router();
const healthDetails = require("../../controllers/healthDetails/healthDetails.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", healthDetails.getAllhealthDetails);
router.get("/:id", healthDetails.singlehealthDetails);
router.post(
  "/create-healthDetails",
  singleUpload,
  healthDetails.createhealthDetails
);
router.delete("/:id", healthDetails.deletehealthDetails);
router.patch("/:id", singleUpload, healthDetails.updatehealthDetails);

module.exports = router;
