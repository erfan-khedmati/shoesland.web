import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "./authApi";

// check login status
export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const res = await authAPI.isUserAuth();
  return res.user;
});

export const loginUser = createAsyncThunk("auth/login", async (body) => {
  const res = await authAPI.login(body);
  return res;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //fetch user
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user = null;
        state.loading = false;
      })

      //login user
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action)=> {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action)=> {
        state.error = action.payload;
      })
  },
});

export default authSlice.reducer;