// routes/meta.routes.js
const express = require("express");
const { handleReceiveMetaLead, handleVerifyMetaWebhook } = require("../controllers/meta.controller");

const router = express.Router();

// Meta Webhook Verify (GET)
router.get("/webhook", handleVerifyMetaWebhook);

// Meta Lead Receive (POST)
router.post("/webhook", handleReceiveMetaLead);

module.exports = router;
