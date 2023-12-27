const router = require("express").Router();
const projectBanner = require("../../controllers/projectBanner/projectBanner.controller");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", projectBanner.getAllbanner);
router.get("/:id", projectBanner.singlebanner);
router.post("/create-banner", singleUpload, projectBanner.createbanner);
router.delete("/:id", projectBanner.deletebanner);
router.patch("/:id", singleUpload, projectBanner.updatebanner);

module.exports = router;
