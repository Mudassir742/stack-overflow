const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authMiddleware");

const userController = require("../controllers/userController");

router.post("/login", userController.userLogin);
router.post("/register", userController.userRegister);

router.get("/get-profile", authenticateToken, userController.getUserProfile);
router.post("/edit-profile", authenticateToken, userController.editProfile);

module.exports = router;
