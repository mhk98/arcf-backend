const router = require("express").Router();
const health = require("../../controllers/health/health.controller");
const auth = require("../../middlewares/auth");

router.get("/", health.getAllhealth);
router.get("/:id", health.singlehealth);
router.post("/create-health", health.createhealth);
router.delete("/:id", health.deletehealth);
router.patch("/:id", health.updatehealth);

module.exports = router;
