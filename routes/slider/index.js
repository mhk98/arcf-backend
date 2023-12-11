const router = require("express").Router();
const slider = require("../../controllers/slider/slider.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");


router.get("/", slider.getAllslider);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-slider", upload.single("file"), slider.createslider);
router.delete("/:id", slider.deleteslider);
router.put("/:id", upload.single("file"), slider.updateslider);

module.exports = router
