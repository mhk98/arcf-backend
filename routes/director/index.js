const router = require("express").Router();
const director = require("../../controllers/director/director.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");

router.get("/", director.getAlldirector);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-director", upload.single("file"), director.createdirector);
router.delete("/:id", director.deletedirector);
router.put("/:id", upload.single("file"), director.updatedirector);

module.exports = router;
