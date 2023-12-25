const router = require("express").Router();
const team = require("../../controllers/team/team.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", team.getAllteam);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-director", singleUpload, team.createteam);
router.delete("/:id", team.deleteteam);
router.patch("/:id", singleUpload, team.updateteam);

module.exports = router;
