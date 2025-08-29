import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
  deleteDoc,
  increment,
} from "firebase/firestore";
import { auth } from "../../firebase-config"; // firebase.js에서 가져온 auth 객체

const db = getFirestore();

// Firestore에서 장바구니 데이터 가져오기
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    const userId = auth.currentUser.uid;
    const cartRef = collection(db, "users", userId, "cart");
    const querySnapshot = await getDocs(cartRef);

    // Firestore 문서들을 배열로 변환
    const items = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return items;
  }
);

// 장바구니에 아이템 추가/업데이트
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

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (itemId, thunkAPI) => {
    try {
      const userId = auth.currentUser.uid;

      // ⭐️ 1. doc()을 사용하여 삭제할 문서에 대한 참조를 만듭니다.
      const itemRef = doc(db, "users", userId, "cart", itemId);

      // ⭐️ 2. deleteDoc()을 사용하여 문서를 삭제합니다.
      await deleteDoc(itemRef);

      // ⭐️ 3. 성공적으로 삭제된 문서의 ID를 반환합니다.
      console.log("Firestore 항목 삭제 성공:", itemId);
      return itemId;
    } catch (error) {
      console.error("Firestore 항목 삭제 실패:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const clearAllCart = createAsyncThunk(
  "cart/clearAllCart",
  async (_, thunkAPI) => {
    try {
      const userId = auth.currentUser.uid;
      const cartRef = collection(db, "users", userId, "cart");
      const querySnapshot = await getDocs(cartRef);

      const deletePromises = querySnapshot.docs.map((docSnapshot) => {
        return deleteDoc(doc(db, "users", userId, "cart", docSnapshot.id));
      });

      await Promise.all(deletePromises);

      console.log("Firestore 장바구니가 초기화되었습니다.");
      return true;
    } catch (error) {
      console.error("Firestore 장바구니 초기화 실패:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
