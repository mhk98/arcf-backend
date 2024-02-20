const router = require("express").Router();
const projects = require("../../controllers/projects/projects.controller");
const auth = require("../../middlewares/auth");
const { tripleUpload } = require("../../middlewares/upload");

router.get("/", projects.getAllprojects);
router.get("/:id", projects.singleprojects);
router.post("/create-projects", tripleUpload, projects.createprojects);
router.delete("/:id", projects.deleteprojects);
router.patch("/:id", tripleUpload, projects.updateprojects);

module.exports = router;
