const router = require("express").Router();
const director = require("../../controllers/director/director.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", director.getAlldirector);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-director", singleUpload, director.createdirector);
router.delete("/:id", director.deletedirector);
router.patch("/:id", singleUpload, director.updatedirector);

module.exports = router;
