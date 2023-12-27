const router = require("express").Router();
const projects = require("../../controllers/projects/projects.controller");
const auth = require("../../middlewares/auth");

router.get("/", projects.getAllprojects);
router.get("/:id", projects.singleprojects);
router.post("/create-projects", projects.createprojects);
router.delete("/:id", projects.deleteprojects);
router.patch("/:id", projects.updateprojects);

module.exports = router;
