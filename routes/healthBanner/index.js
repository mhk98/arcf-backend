const router = require("express").Router();
const healthBanner = require("../../controllers/healthBanner/healthBanner.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", healthBanner.getAllhealthBanner);
router.get("/:id", healthBanner.singlehealthBanner);
router.post(
  "/create-healthBanner",
  singleUpload,
  healthBanner.createhealthBanner
);
router.delete("/:id", healthBanner.deletehealthBanner);
router.patch("/:id", singleUpload, healthBanner.updatehealthBanner);

module.exports = router;
