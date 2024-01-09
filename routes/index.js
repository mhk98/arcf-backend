const router = require("express").Router();
const user = require("./users");
const slider = require("./slider");
const faq = require("./faq");
const about = require("./about");
const aboutBanner = require("./aboutBanner");
const projects = require("./projects");
const projectBanner = require("./projectBanner");
const projectDetails = require("./projectDetails");
// const health = require("./health");
const healthBanner = require("./healthBanner");
// const healthDetails = require("./healthDetails");
// const healthCategoryDetails = require("./healthCategoryDetails");
const projectSubCategory = require("./projectSubCategory");

const projectSubCategoryDetails = require("./projectSubCategoryDetails");
const projectSubCategoryHeader = require("./projectSubCategoryHeader");
const projectSubCategoryDetailsHeader = require("./projectSubCategoryDetailsHeader");
const ProjectSubCategoryDescription = require("./projectSubCategoryDescription");

router.use("/user", user);
router.use("/slider", slider);
router.use("/faq", faq);
router.use("/about", about);
router.use("/banner", aboutBanner);
router.use("/projects", projects);
router.use("/projectBanner", projectBanner);
router.use("/projectDetails", projectDetails);
// router.use("/health", health);
router.use("/healthBanner", healthBanner);
// router.use("/healthDetails", healthDetails);
// router.use("/healthCategoryDetails", healthCategoryDetails);
router.use("/projectSubCategory", projectSubCategory);
router.use("/projectSubCategoryDetails", projectSubCategoryDetails);
router.use("/projectSubCategoryHeader", projectSubCategoryHeader);
router.use("/projectSubCategoryDetailsHeader", projectSubCategoryDetailsHeader);
router.use("/ProjectSubCategoryDescription", ProjectSubCategoryDescription);

module.exports = router;
