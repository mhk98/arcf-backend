const router = require("express").Router();
const aboutARCF = require("../../controllers/aboutARCF/aboutARCF.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");

router.get("/", aboutARCF.getAllaboutARCF);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-aboutARCF", upload.single("file"), aboutARCF.createaboutARCF);
router.delete("/:id", aboutARCF.deleteaboutARCF);
router.put("/:id", upload.single("file"), aboutARCF.updateaboutARCF);

module.exports = router;
