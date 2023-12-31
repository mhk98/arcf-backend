const router = require("express").Router();
const user = require("./users");
const slider = require("./slider");
const faq = require("./faq");
const about = require("./about");
const aboutBanner = require("./aboutBanner");
const projects = require("./projects");
const projectBanner = require("./projectBanner");
const projectDetails = require("./projectDetails");
const health = require("./health");
const healthBanner = require("./healthBanner");
const healthDetails = require("./healthDetails");
const healthCategoryDetails = require("./healthCategoryDetails");

router.use("/user", user);
router.use("/slider", slider);
router.use("/faq", faq);
router.use("/about", about);
router.use("/banner", aboutBanner);
router.use("/projects", projects);
router.use("/projectBanner", projectBanner);
router.use("/projectDetails", projectDetails);
router.use("/health", health);
router.use("/healthBanner", healthBanner);
router.use("/healthDetails", healthDetails);
router.use("/healthCategoryDetails", healthCategoryDetails);

module.exports = router;
