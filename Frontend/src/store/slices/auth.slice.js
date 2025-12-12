import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userAuthenticated:(state,action)=>{
        state.user = action.payload,
        state.isAuthenticated = true
    },
    userSignIn: (state, action) => {
      state.user = action.payload,
      state.isAuthenticated = true
    },
    userSignUp: (state, action) => {
      state.user = action.payload,
      state.isAuthenticated = true
    },
    userLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false
    },
  },
});

export const { userLogin, userLogout, userSignUp,userAuthenticated } = authSlice.actions;

export default authSlice.reducer;
