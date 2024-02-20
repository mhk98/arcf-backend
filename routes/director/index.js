const router = require("express").Router();
const director = require("../../controllers/director/director.controller");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", director.getAllDirector);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-director", singleUpload, director.createDirector);
router.delete("/:id", director.deleteDirector);
router.patch("/:id", singleUpload, director.updateDirector);

module.exports = router;
