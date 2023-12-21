const router = require("express").Router();
const aboutBanner = require("../../controllers/aboutBanner/aboutBanner.controller");

const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");

router.get("/", aboutBanner.getAllaboutBanner);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-banner", upload, aboutBanner.createaboutBanner);
router.delete("/:id", aboutBanner.deleteaboutBanner);
router.patch("/:id", upload, aboutBanner.updateaboutBanner);

module.exports = router;
