const router = require("express").Router();
const news = require("../../controllers/news/news.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", news.getAllNews);
// router.get("/:id", news.singleNews);
router.get("/:statusId", news.getCategoryNews);
router.post("/create-news", singleUpload, news.createNews);
router.delete("/:id", news.deleteNews);
router.patch("/:id", singleUpload, news.updateNews);

module.exports = router;
