// services/google.service.js
// Google Lead processing logic

const Lead = require("../models/lead.model");

const processGoogleLeadService = async (payload) => {
  try {
    // payload expected to have leadData, campaignId, adGroupId, adId
    const data = payload?.leadData || {};

    const lead = await Lead.create({
      name: data.fullName || data.name || null,
      email: data.email || null,
      phone: data.phoneNumber || data.phone || null,
      service: data.serviceInterest || payload.service || null,
      source: "google",
      campaign: payload.campaignId || null,
      adset: payload.adGroupId || null,
      ad: payload.adId || null,
      rawPayload: payload,
    });

    return lead;
  } catch (error) {
    console.log("Google Service Error:", error);
    throw error;
  }
};

module.exports = { processGoogleLeadService };
