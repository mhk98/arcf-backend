const router = require("express").Router();
const team = require("../../controllers/team/team.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");

router.get("/", team.getAllteam);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-director", upload.single("file"), team.createteam);
router.delete("/:id", team.deleteteam);
router.patch("/:id", upload.single("file"), team.updateteam);

module.exports = router;
