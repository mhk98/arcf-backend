const router = require("express").Router();
const aboutARCF = require("../../controllers/aboutARCF/aboutARCF.controller");
const { upload } = require("../../helpers/filehelper");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", aboutARCF.getAllaboutARCF);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post(
  "/create-aboutARCF",
  singleUpload,
  aboutARCF.createaboutARCF
);
router.delete("/:id", aboutARCF.deleteaboutARCF);
router.patch("/:id", singleUpload, aboutARCF.updateaboutARCF);

module.exports = router;
