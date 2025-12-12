
import axios from "axios";
import { api } from "./api";
import { userAuthenticated, userLogout } from "../store/slices/auth.slice";

//! handle validate input form
export const handleValidateForm = (formData, pageType, enqueueSnackbar) => {
  const { firstName, lastName, email, password } = formData;

  if (pageType === "sign-up") {
    if (!firstName?.trim() || !lastName?.trim()) {
      enqueueSnackbar("First name and Last name are required", { variant: "error" });
      return false;
    }
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

  if (!password?.trim()) {
    enqueueSnackbar("Password is required", { variant: "error" });
    return false;
  }
  if (password.length < 6) {
    enqueueSnackbar("Password must be at least 6 characters", { variant: "error" });
    return false;
  }

  return true;
};


export const authFormHandler = async (formData, pageType, dispatch, enqueueSnackbar) => {
  try {
    const isValid = handleValidateForm(formData, pageType, enqueueSnackbar);
    if (!isValid) return { success: false };

    const endpoint = pageType === "sign-in" ? "sign-in" : "sign-up";
    const response = await axios.post(`${api}/auth/${endpoint}`, formData, {
      withCredentials: true,
    });

    dispatch(userAuthenticated(response.data.user));
    enqueueSnackbar(pageType === "sign-in" ? "Login successful!" : "Signup successful!", { variant: "success" });

    return { success: true, user: response.data.user };
  } catch (err) {
    const message = err.response?.data?.error || "Something went wrong";
    enqueueSnackbar(message, { variant: "error" });
    return { success: false, error: message };
  }
};

//! handle logout
export const handleLogout = async (dispatch, navigate, enqueueSnackbar) => {
  try {
    await axios.get(`${api}/auth/logout`, { withCredentials: true });
    dispatch(userLogout());
    enqueueSnackbar("Logged out successfully", { variant: "success" });
    navigate("/sign-in");
  } catch (error) {
    console.error("Logout error:", error);
    enqueueSnackbar("Failed to logout", { variant: "error" });
  }
};
