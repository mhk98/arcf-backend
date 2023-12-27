const router = require("express").Router();
const healthBanner = require("../../controllers/healthBanner/healthBanner.controller");
const auth = require("../../middlewares/auth");

router.get("/", healthBanner.getAllhealthBanner);
router.get("/:id", healthBanner.singlehealthBanner);
router.post("/create-healthBanner", healthBanner.createhealthBanner);
router.delete("/:id", healthBanner.deletehealthBanner);
router.patch("/:id", healthBanner.updatehealthBanner);

module.exports = router;
