const router = require("express").Router();
const aboutARCF = require("../../controllers/aboutARCF/aboutARCF.controller");

const auth = require("../../middlewares/auth");
const { doubleUpload } = require("../../middlewares/upload");

router.get("/", aboutARCF.getAllaboutARCF);
router.post("/create-aboutARCF", doubleUpload, aboutARCF.createaboutARCF);
router.delete("/:id", aboutARCF.deleteaboutARCF);
router.patch("/:id", doubleUpload, aboutARCF.updateaboutARCF);

module.exports = router;
