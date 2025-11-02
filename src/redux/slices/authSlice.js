 // authSlice.js
  import { createSlice } from "@reduxjs/toolkit";

  const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      isEmailVerified: false,
      registerMessage: null, 
    },

    reducers: {
      login(state, action) {
        state.user = action.payload;
        state.registerMessage = null;
      },
      register(state, action) {
        state.registerMessage = action.payload;
      },
    },
  });

  const authReducer = authSlice.reducer;
  const authActions = authSlice.actions;

  export { authReducer, authActions };