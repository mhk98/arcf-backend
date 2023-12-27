const router = require("express").Router();
const projectDetails = require("../../controllers/projectDetails/projectDetails.controller");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", projectDetails.getAllprojectDetails);
router.get("/:id", projectDetails.singleprojectDetails);
router.post(
  "/create-projectDetails",
  singleUpload,
  projectDetails.createprojectDetails
);
router.delete("/:id", projectDetails.deleteprojectDetails);
router.patch("/:id", singleUpload, projectDetails.updateprojectDetails);

module.exports = router;
