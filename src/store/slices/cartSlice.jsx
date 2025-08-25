// https://velog.io/@sweet_pumpkin/%EB%AC%B4%EC%9E%91%EC%A0%95%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0-%EC%B5%9C%EA%B3%A0-%EB%A6%AC%EB%8D%95%EC%8A%A4%EC%95%BC-%EA%B3%A0%EB%A7%99%EB%8B%A4-Redux-Redux-Toolkit-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // 1. 새 상품을 장바구니에 '추가'하는 Reducer 정의
    addItem: (state, action) => {
      const newItem = action.payload; // payload에는 추가할 상품 정보가 들어옵니다.

      // 이미 장바구니에 있는 상품인지 확인
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // 이미 있으면 수량만 증가
        existingItem.quantity += 1;
      } else {
        // 없으면 배열에 새 항목 추가 (RTK는 immer를 사용하므로 직접 push 가능)
        state.items.push({
          ...newItem,
          quantity: 1, // 기본 수량은 1로 설정
        });
      }
    },

    // 2. 기존의 'updateQuantity' Reducer는 그대로 유지
    updateQuantity: (state, action) => {
      const { id, change } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity += change;
      }
    },
    // ... 기타 리듀서 (예: removeItem)
  },
});

export const { addItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
