// models/lead.model.js
const mongoose = require('mongoose');

//* Lead Schema → हमारे Lead की structure
const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,

  // Lead कहाँ से आई है? (Website, Meta, Google)
  source: { 
    type: String, 
    enum: ['website', 'meta', 'google', 'other'], 
    default: 'website' 
  },

  // Campaign details
  campaign: String,
  adset: String,
  ad: String,

  // Raw Payload → पूरा lead data safe रखने के लिए
  rawPayload: Object,

  // Lead का Status
  status: { 
    type: String, 
    enum: ['new', 'contacted', 'converted', 'lost'], 
    default: 'new' 
  },

  // Lead किस sales person को assign है?
  ownerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    default: null 
  },

}, { timestamps: true }); 

const Lead = mongoose.model('Lead', LeadSchema);

module.exports = Lead;
