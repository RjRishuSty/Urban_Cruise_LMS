import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  authChecked: false, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userAuthenticated: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.authChecked = true;
    },
    userLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.authChecked = true;
    },
    authCheckCompleted: (state) => {
      state.authChecked = true;
    },
  },
});

export const {
  userAuthenticated,
  userLogout,
  authCheckCompleted,
} = authSlice.actions;

export default authSlice.reducer;

