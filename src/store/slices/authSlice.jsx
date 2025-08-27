import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "../asyncTrunks/loginTrunks";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // 로그인 성공 시 호출: 상태 유지
    setUser: (state, action) => {
      // onAuthStateChanged의 user 받기
      const authUser = action.payload;

      state.user = authUser.toJSON();
      state.status = "succeeded";
      state.error = null;
    },
    // 로그아웃 시 호출
    clearUser: (state) => {
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
      })
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
