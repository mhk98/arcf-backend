const router = require("express").Router();
const management = require("../../controllers/management/management.controller");

const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", management.getAllManagement);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-management", singleUpload, management.createManagement);
router.delete("/:id", management.deleteManagement);
router.patch("/:id", singleUpload, management.updateManagement);

module.exports = router;
