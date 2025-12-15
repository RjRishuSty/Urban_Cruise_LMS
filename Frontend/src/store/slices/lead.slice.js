import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leads: [],
  selectedLead: null,
};

const leadSlice = createSlice({
  name: "lead",
  initialState,
  reducers: {
    setLeads: (state, action) => {
      state.leads =  action.payload;
    },
    addLead: (state, action) => {
      state.leads.push(action.payload);
    },
    updateLead: (state, action) => {
      const index = state.leads.findIndex(l => l._id === action.payload._id);
      if (index !== -1) state.leads[index] = action.payload;
    },
    deleteLead: (state, action) => {
      state.leads = state.leads.filter(l => l._id !== action.payload);
    },
    selectLead: (state, action) => {
      state.selectedLead = action.payload;
    },
    clearLeads: (state) => {
      state.leads = [];
      state.selectedLead = null;
    },
  },
});

export const { setLeads, addLead, updateLead, deleteLead, selectLead, clearLeads } = leadSlice.actions;
export default leadSlice.reducer;
