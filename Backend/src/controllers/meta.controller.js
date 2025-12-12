// controllers/meta.controller.js
// Meta webhook verify + receive controller

const { processMetaLeadService } = require("../services/meta.service");

// Verify Meta Webhook (GET)
const handleVerifyMetaWebhook = (req, res) => {
  const VERIFY_TOKEN = process.env.META_VERIFY_TOKEN;

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token && mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Meta Webhook Verified!");
    return res.status(200).send(challenge);
  }

  return res.status(403).send("Verification Failed!");
};

// Receive Meta Lead (POST)
const handleReceiveMetaLead = async (req, res) => {
  try {
    console.log(
      "👉 NEW META LEAD RECEIVED:",
      JSON.stringify(req.body, null, 2)
    );

    const response = await processMetaLeadService(req.body);

    return res.status(200).json({
      success: true,
      message: "Meta Lead Processed",
      data: response,
    });
  } catch (error) {
    console.log("Meta Lead Error:", error.message || error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { handleReceiveMetaLead, handleVerifyMetaWebhook };
