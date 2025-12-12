// controllers/google.controller.js
const { processGoogleLeadService } = require("../services/google.service");

// Receive Google Lead (POST)
const handleReceiveGoogleLead = async (req, res) => {
  try {
    console.log("👉 NEW GOOGLE LEAD RECEIVED:", JSON.stringify(req.body, null, 2));

    const lead = await processGoogleLeadService(req.body);

    res.status(200).json({
      success: true,
      message: "Google Lead Saved",
      data: lead,
    });
  } catch (error) {
    console.log("Google Lead Error:", error.message || error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { handleReceiveGoogleLead };
