const router = require("express").Router();
const healthDetails = require("../../controllers/healthDetails/healthDetails.controller");
const auth = require("../../middlewares/auth");

router.get("/", healthDetails.getAllhealthDetails);
router.get("/:id", healthDetails.singlehealthDetails);
router.post("/create-healthDetails", healthDetails.createhealthDetails);
router.delete("/:id", healthDetails.deletehealthDetails);
router.patch("/:id", healthDetails.updatehealthDetails);

module.exports = router;
