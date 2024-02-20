const router = require("express").Router();
const user = require("../../controllers/users/users.controller");
const auth = require("../../middlewares/auth");
const { upload, singleUpload } = require("../../middlewares/upload");

router.post("/signup", singleUpload, user.signup);
router.post("/login", user.login);
router.patch("/forgot-password", user.forgotPassword);
router.post("/refresh-token", user.refreshToken);
router.get("/", user.getAllUsers);
router.delete("/:id", user.deleteUser);
router.get("/:id", auth("admin", "user"), user.getSingleUser);

module.exports = router;
