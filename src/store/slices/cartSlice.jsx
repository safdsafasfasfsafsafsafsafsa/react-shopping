import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "../asyncTrunks/cartsTrunks";
import { useDispatch } from "react-redux";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.amount += 1;
      } else {
        // 없으면 배열에 새 항목 추가 (RTK는 immer를 사용하므로 직접 push 가능)
        state.items.push({
          ...newItem,
        });
      }
    },

    // removeItem: (state, action) => {},

    countAmount: (state, action) => {
      const { id, change } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.amount += change;
      }
    },

    // sumPrice: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        addItem(action.payload); // 데이터 저장
        console.log("state.items", state.items);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addItem, countAmount } = cartSlice.actions;
export default cartSlice.reducer;
