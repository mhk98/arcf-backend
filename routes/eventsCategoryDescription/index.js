const router = require("express").Router();
const eventsCategoryDescription = require("../../controllers/eventsCategoryDescription/eventsCategoryDescription.controller");
const auth = require("../../middlewares/auth");
const { multipleUpload } = require("../../middlewares/upload");

router.get("/", eventsCategoryDescription.getAllEventsCategoryDescription);
router.get("/:id", eventsCategoryDescription.getSingleProjectAllSubCategory);

router.post(
  "/create-eventsCategoryDescription/:id/",
  multipleUpload,
  eventsCategoryDescription.createEventsCategoryDescription
);
router.delete(
  "/:id",
  eventsCategoryDescription.deleteEventsCategoryDescription
);
router.patch(
  "/:id",
  multipleUpload,
  eventsCategoryDescription.updateEventsCategoryDescription
);

module.exports = router;
