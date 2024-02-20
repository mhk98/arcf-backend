const router = require("express").Router();
const events = require("../../controllers/events/events.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", events.getAllEvents);
router.get("/:id", events.singleEvents);
router.post("/create-events", singleUpload, events.createEvents);
router.delete("/:id", events.deleteEvents);
router.patch("/:id", singleUpload, events.updateEvents);

module.exports = router;
