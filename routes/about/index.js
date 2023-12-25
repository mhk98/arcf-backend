const router = require("express").Router();
const about = require("../../controllers/about/about.controller");

const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");


router.get("/", about.getAllabout);
router.post("/create-about", singleUpload, about.createabout);
router.delete("/:id", about.deleteabout);
router.patch("/:id", singleUpload, about.updateabout);

module.exports = router;
