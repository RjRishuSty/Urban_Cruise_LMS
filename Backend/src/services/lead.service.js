// services/lead.service.js
// यहाँ सारा बिज़नेस लॉजिक होगा (Lead से related)

const Lead = require("../models/lead.model");

// Create Lead Service
const createLeadService = async (data) => {
  const { name, email, phone, service } = data;

  // Basic validation (improve as needed)
  if (!name && !email && !phone) {
    throw new Error("Lead must have at least name or email or phone");
  }

  const lead = await Lead.create({
    name,
    email,
    phone,
    service,
    source: data.source || "website",
    campaign: data.campaign || null,
    adset: data.adset || null,
    ad: data.ad || null,
    rawPayload: data,
  });

  return lead;
};

// Get All Leads (Filters + Pagination)
const getLeadsService = async (query) => {
  const { source, status, page = 1, limit = 25 } = query;

  const filter = {};

  if (source) filter.source = source;
  if (status) filter.status = status;

  const leads = await Lead.find(filter)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));

  return leads;
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
