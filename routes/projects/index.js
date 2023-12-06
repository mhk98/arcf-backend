const router = require("express").Router();
const projects = require("../../controllers/projects/projects.controller");
const auth = require("../../middlewares/auth");

router.get("/", projects.getAllprojects);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-projects", projects.createprojects);
// router.delete("/:id", auth("admin"), report.deleteReport);
// router.put("/:id", auth("admin"), report.updateReport);

module.exports = router;
