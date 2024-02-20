const router = require("express").Router();
const viceChairman = require("../../controllers/viceChairman/viceChairman.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", viceChairman.getAllViceChairman);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post(
  "/create-viceChairman",
  singleUpload,
  viceChairman.createViceChairman
);
router.delete("/:id", viceChairman.deleteViceChairman);
router.patch("/:id", singleUpload, viceChairman.updateViceChairman);

module.exports = router;
