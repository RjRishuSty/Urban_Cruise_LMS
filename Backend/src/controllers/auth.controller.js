const { signUpService, signInService } = require("../services/auth.service");
const {
  handleSetAuthCookie,
  handleClearAuthCookie,
} = require("../utils/cookie.util");

const handleSignUpUser = async (req, res) => {
  try {
    const { user, token } = await signUpService(req.body);
    handleSetAuthCookie(res, token);
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const handleSignInUser = async (req, res) => {
  try {
     console.log("RAW BODY:", req.rawBody);
  console.log("REQ BODY:", req.body);
  console.log("REQ HEADERS:", req.headers);
    const { user, token } = await signInService(req.body);
    handleSetAuthCookie(res, token);

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const handleLogoutUser = (req, res) => {
  handleClearAuthCookie(res);
  res.json({ success: true, message: "Logged out successfully" });
};

const handleGetMe = (req, res) => {
  res.json({ success: true, user: req.user });
};

module.exports = {
  handleGetMe,
  handleLogoutUser,
  handleSignInUser,
  handleSignUpUser,
};
