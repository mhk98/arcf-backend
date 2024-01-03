const router = require("express").Router();
const health = require("../../controllers/projectSubCategory/projectSubCategory.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", health.getAllhealth);
router.get("/:id", health.singlehealth);
router.post("/create-health", singleUpload, health.createhealth);
router.delete("/:id", health.deletehealth);
router.patch("/:id", singleUpload, health.updatehealth);

module.exports = router;
