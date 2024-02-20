const router = require("express").Router();
const donation = require("../../controllers/donation/donation.controller");
const auth = require("../../middlewares/auth");
const { singleUpload } = require("../../middlewares/upload");

router.get("/", donation.getAllDonation);
router.get("/:id", donation.singleDonation);
router.post("/create-donation", singleUpload, donation.createDonation);
router.delete("/:id", donation.deleteDonation);
router.patch("/:id", singleUpload, donation.updateDonation);

module.exports = router;
