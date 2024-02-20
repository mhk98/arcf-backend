const router = require("express").Router();
const eventsDetails = require("../../controllers/eventsDetails/eventsDetails.controller");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", eventsDetails.getAllEventsDetails);
router.get("/:id", eventsDetails.singleEventsDetails);
router.post(
  "/create-eventsDetails",
  singleUpload,
  eventsDetails.createEventsDetails
);
router.delete("/:id", eventsDetails.deleteEventsDetails);
router.patch("/:id", singleUpload, eventsDetails.updateEventsDetails);

module.exports = router;
