const router = require("express").Router();
const aboutBanner = require("../../controllers/aboutBanner/aboutBanner.controller");

const auth = require("../../middlewares/auth");
const { tripleUpload } = require("../../middlewares/upload");

router.get("/", aboutBanner.getAllAboutBanner);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-banner", tripleUpload, aboutBanner.createAboutBanner);
router.delete("/:id", aboutBanner.deleteAboutBanner);
router.patch("/:id", tripleUpload, aboutBanner.updateAboutBanner);

module.exports = router;
