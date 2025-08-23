// https://velog.io/@donggoo/Redux-Toolkit-%EB%A6%AC%EB%8D%95%EC%8A%A4-%ED%88%B4%ED%82%B7-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuth: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice;
