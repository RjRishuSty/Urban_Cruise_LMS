// routes/lead.routes.js
const express = require("express");
const {
  handleCreateLead,
  handleGetLeadById,
  handleUpdateLead,
  handleDeleteLead,
  handleGetLeads,
} = require("../controllers/lead.controller");

const router = express.Router();

// नया Lead बनाना (Webhook / Website Form)
router.post("/webhook", handleCreateLead);

// सभी Leads लाना + Filters + Pagination
router.get("/", handleGetLeads);

// एक Lead detail
router.get("/:id", handleGetLeadById);

// Lead Update करना (status, assign, notes)
router.put("/:id", handleUpdateLead);

// Lead Delete
router.delete("/:id", handleDeleteLead);

module.exports = router;
