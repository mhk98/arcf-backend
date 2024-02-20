const router = require("express").Router();
const contactSlider = require("../../controllers/contactSlider/contactSlider.controller");
const { tripleUpload } = require("../../middlewares/upload");

router.get("/", contactSlider.getAllContactSlider);
router.post(
  "/create-contactSlider",
  tripleUpload,
  contactSlider.createContactSlider
);
router.delete("/:id", contactSlider.deleteContactSlider);
router.patch("/:id", tripleUpload, contactSlider.updateContactSlider);

module.exports = router;
