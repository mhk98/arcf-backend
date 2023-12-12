const router = require("express").Router();
const slider = require("../../controllers/slider/slider.controller");
const { upload } = require("../../middlewares/upload");

router.get("/", slider.getAllslider);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-slider", upload, slider.createslider);
router.delete("/:id", slider.deleteslider);
router.patch("/:id", upload, slider.updateslider);

module.exports = router;
