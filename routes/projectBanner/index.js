const router = require("express").Router();
const projectBanner = require("../../controllers/projectBanner/projectBanner.controller");
const { singleUpload, tripleUpload } = require("../../middlewares/upload");

router.get("/", projectBanner.getAllbanner);
router.get("/:id", projectBanner.singlebanner);
router.post("/create-projectBanner", tripleUpload, projectBanner.createbanner);
router.delete("/:id", projectBanner.deletebanner);
router.patch("/:id", tripleUpload, projectBanner.updatebanner);

module.exports = router;
