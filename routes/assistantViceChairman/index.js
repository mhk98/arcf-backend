const router = require("express").Router();
const assistantViceChairman = require("../../controllers/assistantViceChairman/assistantViceChairman.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", assistantViceChairman.getAllAssistantViceChairman);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post(
  "/create-assistantViceChairman",
  singleUpload,
  assistantViceChairman.createAssistantViceChairman
);
router.delete("/:id", assistantViceChairman.deleteAssistantViceChairman);
router.patch(
  "/:id",
  singleUpload,
  assistantViceChairman.updateAssistantViceChairman
);

module.exports = router;
