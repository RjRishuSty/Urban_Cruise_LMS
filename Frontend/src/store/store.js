import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import leadSlice from "./slices/lead.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    lead: leadSlice,
  },
});
