// services/meta.service.js
// Facebook / Meta Lead processing logic

const Lead = require("../models/lead.model");

// Helper to extract field value by Facebook key
const extractField = (fields = [], key) => {
  const item = fields.find((x) => x.name === key);
  return item ? item.values?.[0] || null : null;
};

// Process Meta Lead Service
const processMetaLeadService = async (payload) => {
  try {
    // FB sends inside entry → changes
    const entry = payload.entry?.[0];
    const change = entry?.changes?.[0];
    const leadgen = change?.value;

    const campaignId = leadgen?.campaign_id || null;
    const adsetId = leadgen?.adset_id || null;
    const adId = leadgen?.ad_id || null;

    const fieldData = leadgen?.field_data || [];

    // Extract fields from payload
    const name = extractField(fieldData, "full_name");
    const email = extractField(fieldData, "email");
    const phone = extractField(fieldData, "phone_number");

    // Save to MongoDB
    const lead = await Lead.create({
      name,
      email,
      phone,
      service: "From Facebook Lead Ad",
      source: "meta",
      campaign: campaignId,
      adset: adsetId,
      ad: adId,
      rawPayload: payload,
    });

    return lead;
  } catch (error) {
    console.log("Meta Lead Service Error:", error);
    throw error;
  }
};

module.exports = { processMetaLeadService };
