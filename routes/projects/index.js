const router = require("express").Router();
const projects = require("../../controllers/projects/projects.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", projects.getAllprojects);
router.get("/:id", projects.singleprojects);
router.post("/create-projects", singleUpload, projects.createprojects);
router.delete("/:id", projects.deleteprojects);
router.patch("/:id", projects.updateprojects);

module.exports = router;
