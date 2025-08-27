import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../asyncTrunks/loginTrunks";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // 동기적인 로그아웃 액션
    logoutUser: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload; // 로그인 성공 시 유저 정보 저장
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // rejectWithValue로 받은 에러 메시지
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
