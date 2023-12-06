const router = require("express").Router();
const user = require("./users");
const projects = require("./projects");
const slider = require("./slider");
router.use("/user", user);
router.use("/projects", projects);
router.use("/slider", slider);

module.exports = router;
