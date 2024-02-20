const router = require("express").Router();
const newsDetails = require("../../controllers/newsDetails/newsDetails.controller");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", newsDetails.getAllNewsDetails);
router.get("/:id", newsDetails.singleNewsDetails);
router.post("/create-newsDetails", singleUpload, newsDetails.createNewsDetails);
router.delete("/:id", newsDetails.deleteNewsDetails);
router.patch("/:id", singleUpload, newsDetails.updateNewsDetails);

module.exports = router;
