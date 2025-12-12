// routes/google.routes.js
const express = require("express");
const { handleReceiveGoogleLead } = require("../controllers/google.controller");

const router = express.Router();

// Google Webhook
router.post("/webhook", handleReceiveGoogleLead);

module.exports = router;
