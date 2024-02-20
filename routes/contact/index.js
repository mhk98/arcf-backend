const router = require("express").Router();
const contact = require("../../controllers/contact/contact.controller");

router.get("/", contact.getAllContact);
router.get("/:id", contact.singleContact);
router.post("/create-contact", contact.createContact);
router.delete("/:id", contact.deleteContact);
router.patch("/:id", contact.updateContact);

module.exports = router;
