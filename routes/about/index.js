const router = require("express").Router();
const about = require("../../controllers/about/about.controller");
const { tripleUpload } = require("../../middlewares/upload");

router.get("/", about.getAllabout);
router.post("/create-about", tripleUpload, about.createabout);
router.delete("/:id", about.deleteabout);
router.patch("/:id", tripleUpload, about.updateabout);

module.exports = router;
