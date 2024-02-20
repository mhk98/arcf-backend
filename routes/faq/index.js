const router = require("express").Router();
const faq = require("../../controllers/faq/faq.controller");

router.get("/", faq.getAllfaq);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-faq", faq.createfaq);
router.delete("/:id", faq.deletefaq);
router.patch("/:id", faq.updatefaq);

module.exports = router;
