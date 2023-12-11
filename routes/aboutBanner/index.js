const router = require("express").Router();
const aboutBanner = require("../../controllers/aboutBanner/aboutBanner.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");

router.get("/", aboutBanner.getAllaboutBanner);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-aboutBanner", upload.single("file"), aboutBanner.createaboutBanner);
router.delete("/:id", aboutBanner.deleteaboutBanner);
router.put("/:id", upload.single("file"), aboutBanner.updateaboutBanner);

module.exports = router;
