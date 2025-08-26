import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // 새 상품을 장바구니에 '추가'
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

    // removeItem: (state, action) => {},

    countQuantity: (state, action) => {
      const { id, change } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity += change;
      }
    },

    // sumPrice: (state, action) => {},
  },
});

export const { addItem, countQuantity } = cartSlice.actions;
export default cartSlice.reducer;
