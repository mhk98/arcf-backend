const router = require("express").Router();
const videoGallery = require("../../controllers/videoGallery/videoGallery.controller");

router.get("/", videoGallery.getAllVideoGallery);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-videoGallery", videoGallery.createVideoGallery);
router.delete("/:id", videoGallery.deleteVideoGallery);
router.patch("/:id", videoGallery.updateVideoGallery);

module.exports = router;
