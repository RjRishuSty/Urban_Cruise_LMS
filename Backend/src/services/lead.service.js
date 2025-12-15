// services/lead.service.js
// यहाँ सारा बिज़नेस लॉजिक होगा (Lead से related)

const Lead = require("../models/lead.model");

// Create Lead Service
const createLeadService = async (data) => {
  const { name, email, phone, service, ownerId } = data;

  // Basic validation (improve as needed)
  if (!name && !email && !phone) {
    throw new Error("Lead must have at least name or email or phone");
  }

  const lead = await Lead.create({
    name,
    email,
    phone,
    service,
    ownerId: ownerId || null,
    source: data.source || "website",
    campaign: data.campaign || null,
    adset: data.adset || null,
    ad: data.ad || null,
    rawPayload: data,
  });

  return lead;
};

const getLeadsService = async () => {
  return await Lead.find();
};

// Get Single Lead
const getLeadByIdService = async (id) => {
  const lead = await Lead.findById(id);
  return lead;
};

// Update Lead
const updateLeadService = async (id, body) => {
  const lead = await Lead.findByIdAndUpdate(id, body, { new: true });
  return lead;
};

// Delete Lead
const deleteLeadService = async (id) => {
  const lead = await Lead.findByIdAndDelete(id);
  return lead;
};

module.exports = {
  createLeadService,
  getLeadsService,
  getLeadByIdService,
  updateLeadService,
  deleteLeadService,
};
