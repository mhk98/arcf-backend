const router = require("express").Router();
const chairman = require("../../controllers/chairman/chairman.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");

router.get("/", chairman.getAllchairman);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-chairman", upload.single("file"), chairman.createchairman);
router.delete("/:id", chairman.deletechairman);
router.patch("/:id", upload.single("file"), chairman.updatechairman);

module.exports = router;
