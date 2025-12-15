import axios from "axios";
import { api } from "./api";
import { addLead, deleteLead, setLeads, updateLead } from "../store/slices/lead.slice";

// TODO: Get all lead data ...........
export const getAllLeads = async (setLoading, dispatch, enqueueSnackbar) => {
  try {
    setLoading(true);
    const response = await axios.get(`${api}/leads`);
    if (response.status === 200) {
      dispatch(setLeads(response.data.data));
      enqueueSnackbar(response.data.message, { variant: "success" });
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

// TODO: Lead modal form validation............
export const handleValidateForm = (formData, enqueueSnackbar) => {
  const { name, email, phone, service } = formData;

  if (!name?.trim()) {
    enqueueSnackbar("Full name is required", { variant: "error" });
    return false;
  }

  if (!email?.trim()) {
    enqueueSnackbar("Email is required", { variant: "error" });
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    enqueueSnackbar("Invalid email", { variant: "error" });
    return false;
  }

  if (!phone?.trim()) {
    enqueueSnackbar("Phone is required", { variant: "error" });
    return false;
  }
  if (phone.length < 10) {
    enqueueSnackbar("Phone number must be 10 characters", {
      variant: "error",
    });
    return false;
  }
  if (!service) {
    enqueueSnackbar("Service is required", {
      variant: "error",
    });
    return false;
  }

  return true;
};

// TODO: Create a new lead..................
export const handleCreateLead = async (formData, enqueueSnackbar, dispatch) => {
  try {
    const isValid = handleValidateForm(formData, enqueueSnackbar);
    if (!isValid) return { success: false };
    const response = await axios.post(`${api}/leads/webhook`, formData, {
      withCredentials: true,
    });
    dispatch(dispatch(addLead(response.data.data)));
    enqueueSnackbar("Lead Create success", { variant: "success" });
    return { success: true, data: response.data };
  } catch (error) {
    const message = error.response?.data?.error || "Something went wrong";
    enqueueSnackbar(message, { variant: "error" });
    return { success: false, error: message };
  }
};

//TODO: Update leads...............
export const handleUpdateLead = async (id, formData, enqueueSnackbar, dispatch) => {
  try {
    const response = await axios.put(`${api}/leads/${id}`, formData, {
      withCredentials: true,
    });

    dispatch(updateLead(response.data.data));
    enqueueSnackbar("Lead updated successfully", { variant: "success" });

    return { success: true, data: response.data.data };
  } catch (error) {
    const message = error.response?.data?.message || "Something went wrong";
    enqueueSnackbar(message, { variant: "error" });
    return { success: false, error: message };
  }
};

// Delete Lead
export const handleDeleteLead = async (id, enqueueSnackbar, dispatch) => {
  try {
    await axios.delete(`${api}/leads/${id}`, { withCredentials: true });
    dispatch(deleteLead(id));
    enqueueSnackbar("Lead deleted successfully", { variant: "success" });
    return { success: true };
  } catch (error) {
    const message = error.response?.data?.message || "Something went wrong";
    enqueueSnackbar(message, { variant: "error" });
    return { success: false, error: message };
  }
};
