const router = require("express").Router();
const about = require("../../controllers/about/about.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");

router.get("/", about.getAllabout);
router.post("/create-about", upload.single("file"), about.createabout);
router.delete("/:id", about.deleteabout);
router.put("/:id", upload.single("file"), about.updateabout);

module.exports = router;
