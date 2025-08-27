import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
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
