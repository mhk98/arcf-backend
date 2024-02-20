const router = require("express").Router();
const imageGallery = require("../../controllers/imageGallery/imageGallery.controller");

const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", imageGallery.getAllImageGallery);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post(
  "/create-imageGallery",
  singleUpload,
  imageGallery.createImageGallery
);
router.delete("/:id", imageGallery.deleteImageGallery);
router.patch("/:id", singleUpload, imageGallery.updateImageGallery);

module.exports = router;
