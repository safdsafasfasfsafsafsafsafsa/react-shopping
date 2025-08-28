import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { auth } from "../../firebase-config"; // firebase.js에서 가져온 auth 객체
// import { addItem, countAmount } from "../slices/cartSlice";

const db = getFirestore();

// ⭐️ 장바구니에 아이템 추가/업데이트
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (item, thunkAPI) => {
    try {
      const userId = auth.currentUser.uid;
      const itemId = item.id.toString(); // ⭐️ 아이템 ID를 문자열로 변환

      const itemRef = doc(db, "users", userId, "cart", itemId);
      await setDoc(itemRef, item);

      const itemSnap = await getDoc(itemRef);
      if (itemSnap.exists()) {
        console.log("실제 문서 데이터:", itemSnap.data());
      } else {
        console.log("해당 문서가 존재하지 않습니다.");
      }
      return item;
    } catch (error) {
      // ⭐️ 여기에서 에러 메시지를 확인하여 원인을 파악할 수 있습니다.
      console.error("Firestore 작업 중 에러 발생:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ⭐️ 장바구니에서 아이템 삭제
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (itemId, thunkAPI) => {
    const userId = auth.currentUser.uid;
    const itemRef = doc(db, "users", userId, "cart", itemId);
    await deleteDoc(itemRef);
    return itemId;
  }
);
