import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCart,
  addToCart,
  clearCart,
  clearAllCart,
} from "../asyncTrunks/cartsTrunks";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  // reducers: {
  //   clearCartLocally: (state) => {
  //     state.items = [];
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // ⭐️ 파이어베이스에서 가져온 배열로 로컬 상태를 덮어씀
      })
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "succeeded";

        /*
        addItem은 createSlice의 reducers에 정의된 함수로,
        addCase의 콜백 함수 외부에 있습니다.

        따라서 addCase 콜백 내에서 addItem을 호출하는 것은 Redux의 불변성 규칙을 위반하고
        immer의 프록시(Proxy)가 제대로 작동하지 않게 만듭니다.
        */
        const newItem = action.payload;
        const existingItem = state.items.find((item) => item.id === newItem.id);

        if (existingItem) {
          existingItem.amount += 1;
        } else {
          // 없으면 배열에 새 항목 추가 (RTK는 immer를 사용하므로 직접 push 가능)
          state.items.push({
            ...newItem,
            amount: 1,
          });
        }

        console.log("state.items", state.items);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.status = "succeeded";

        const newItem = action.payload;
        state.items = state.items.filter((item) => item.id != newItem.id);
      })
      .addCase(clearAllCart.fulfilled, (state) => {
        state.status = "succeeded";
        state.items = []; // ⭐️ 로컬 상태도 초기화
      });
  },
});

// export const { clearCartLocally } = cartSlice.actions;
export default cartSlice.reducer;
