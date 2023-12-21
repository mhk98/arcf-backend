const router = require("express").Router();
const about = require("../../controllers/about/about.controller");

const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");

router.get("/", about.getAllabout);
router.post("/create-about", upload, about.createabout);
router.delete("/:id", about.deleteabout);
router.patch("/:id", upload, about.updateabout);

module.exports = router;
