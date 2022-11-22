import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFail: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    logOut: (state) => {
      state.currentUser = null;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
