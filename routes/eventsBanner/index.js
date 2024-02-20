const router = require("express").Router();
const eventsBanner = require("../../controllers/eventsBanner/eventsBanner.controller");
const { singleUpload, tripleUpload } = require("../../middlewares/upload");

router.get("/", eventsBanner.getAllEventsBanner);
router.get("/:id", eventsBanner.singleEventsBanner);
router.post(
  "/create-eventsBanner",
  tripleUpload,
  eventsBanner.createEventsBanner
);
router.delete("/:id", eventsBanner.deleteEventsBanner);
router.patch("/:id", tripleUpload, eventsBanner.updateEventsBanner);

module.exports = router;
