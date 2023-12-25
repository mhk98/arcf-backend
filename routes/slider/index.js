const router = require("express").Router();
const slider = require("../../controllers/slider/slider.controller");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", slider.getAllslider);
router.get("/:id", slider.singleslider);
router.post("/create-slider", singleUpload, slider.createslider);
router.delete("/:id", slider.deleteslider);
router.patch("/:id", singleUpload, slider.updateslider);

module.exports = router;
