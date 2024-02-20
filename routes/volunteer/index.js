const router = require("express").Router();
const volunteer = require("../../controllers/volunteer/volunteer.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", volunteer.getAllVolunteer);
// router.get("/:id", auth("user", "admin"), report.singleReport);
router.post("/create-volunteer", singleUpload, volunteer.createVolunteer);
router.delete("/:id", volunteer.deleteVolunteer);
router.patch("/:id", singleUpload, volunteer.updateVolunteer);

module.exports = router;
