const router = require("express").Router();
const user = require("./users");
const projects = require("./projects");
const slider = require("./slider");
const faq = require("./faq");
const about = require("./about");
const aboutBanner = require("./aboutBanner");
router.use("/user", user);
router.use("/projects", projects);
router.use("/slider", slider);
router.use("/faq", faq);
router.use("/about", about);
router.use("/banner", aboutBanner);

module.exports = router;
