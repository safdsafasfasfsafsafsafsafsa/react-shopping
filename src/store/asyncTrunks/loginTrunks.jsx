import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return user.toJSON(); // 사용자 객체를 JSON 형태로 반환
    } catch (error) {
      // ⭐️ 오류 발생 시 rejectWithValue로 에러 메시지 반환
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    await signOut(auth);
    console.log("로그아웃 성공!");
  } catch (error) {
    console.error("로그아웃 실패:", error);
  }
});

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user.toJSON();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
