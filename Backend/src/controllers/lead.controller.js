// controllers/lead.controller.js
// Controller सिर्फ req/res संभालेगा, logic service में जाएगा

const {
  createLeadService,
  getLeadsService,
  getLeadByIdService,
  updateLeadService,
  deleteLeadService,
} = require("../services/lead.service");

// Create Lead (Website / Webhook)
const handleCreateLead = async (req, res) => {
  try {
    const lead = await createLeadService({ ...req.body,
      ownerId: req.user?._id || null});

    res.status(201).json({
      success: true,
      message: "Lead Created Successfully",
      data: lead,
    });
  } catch (error) {
    console.log("Lead Create Error:", error.message || error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get All Leads
const handleGetLeads = async (req, res) => {
  try {
    const leads = await getLeadsService();

    res.json({
      message:'Leads fetched successfully',
      success: true,
      data: leads,
    });
  } catch (error) {
    console.log("Get Leads Error:", error.message || error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get Single Lead
const handleGetLeadById = async (req, res) => {
  try {
    const lead = await getLeadByIdService(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead Not Found",
      });
    }

    res.json({ success: true, data: lead });
  } catch (error) {
    console.log("Get Lead By ID Error:", error.message || error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Update Lead
const handleUpdateLead = async (req, res) => {
  try {
    const lead = await updateLeadService(req.params.id, req.body);

    res.json({
      success: true,
      message: "Lead Updated Successfully",
      data: lead,
    });
  } catch (error) {
    console.log("Update Lead Error:", error.message || error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Delete Lead
const handleDeleteLead = async (req, res) => {
  try {
    await deleteLeadService(req.params.id);

    res.json({
      success: true,
      message: "Lead Deleted Successfully",
    });
  } catch (error) {
    console.log("Delete Lead Error:", error.message || error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = {
  handleCreateLead,
  handleGetLeadById,
  handleUpdateLead,
  handleDeleteLead,
  handleGetLeads,
};
