const router = require("express").Router();
const chairman = require("../../controllers/chairman/chairman.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", chairman.getAllchairman);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-chairman", singleUpload, chairman.createchairman);
router.delete("/:id", chairman.deletechairman);
router.patch("/:id", singleUpload, chairman.updatechairman);

module.exports = router;
