const router = require("express").Router();
const newsBaner = require("../../controllers/newsBanner/newsBanner.controller");
const { singleUpload, tripleUpload } = require("../../middlewares/upload");

router.get("/", newsBaner.getAllbanner);
router.get("/:id", newsBaner.singlebanner);
router.post("/create-newsBaner", tripleUpload, newsBaner.createbanner);
router.delete("/:id", newsBaner.deletebanner);
router.patch("/:id", tripleUpload, newsBaner.updatebanner);

module.exports = router;
