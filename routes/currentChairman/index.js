const router = require("express").Router();
const currentChairman = require("../../controllers/currentChairman/currentChairman.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", currentChairman.getAllCurrentChairman);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post(
  "/create-currentChairman",
  singleUpload,
  currentChairman.createCurrentChairman
);
router.delete("/:id", currentChairman.deleteCurrentChairman);
router.patch("/:id", singleUpload, currentChairman.updateCurrentChairman);

module.exports = router;
