import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  updateDoc,
  deleteDoc,
  increment,
} from "firebase/firestore";
import { auth } from "../../firebase-config"; // firebase.js에서 가져온 auth 객체

const db = getFirestore();

// ⭐️ 장바구니에 아이템 추가/업데이트
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (item, thunkAPI) => {
    try {
      const userId = auth.currentUser.uid;
      const itemId = item.id.toString(); // ⭐️ 아이템 ID를 문자열로 변환
      const itemRef = doc(db, "users", userId, "cart", itemId);

      const itemSnap = await getDoc(itemRef);

      if (itemSnap.exists()) {
        await updateDoc(itemRef, { amount: increment(1) });
        console.log("기존 데이터:", itemSnap.data());
      } else {
        await setDoc(itemRef, { ...item, amount: 1 });
        console.log("신규 데이터:", itemSnap.data());
      }

      // 변경된 내용: 파이어베이스에 작업이 완료된 후, 최신 데이터를 다시 읽어옵니다.
      const updatedItemSnap = await getDoc(itemRef);

      if (updatedItemSnap.exists()) {
        return { ...updatedItemSnap.data(), id: updatedItemSnap.id };
      } else {
        // 이 경우는 발생하지 않겠지만, 예외 처리
        return thunkAPI.rejectWithValue("장바구니 아이템을 찾을 수 없습니다.");
      }
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
