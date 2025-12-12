const express = require("express");
const { handleSignUpUser, handleSignInUser, handleLogoutUser, handleGetMe } = require("../controllers/auth.controller");
const { authMiddleware } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/sign-up", handleSignUpUser);
router.post("/sign-in", handleSignInUser);
router.get("/logout", handleLogoutUser);
router.get("/me", authMiddleware, handleGetMe);

module.exports = router;
