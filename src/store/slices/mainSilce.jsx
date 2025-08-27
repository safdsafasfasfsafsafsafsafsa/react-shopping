import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../asyncTrunks/productsTrunks";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    items: [],
    filteredItems: [],
    filteredLength: 0,
    status: "idle",
    error: null,
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      const category = action.payload; // 외부에서 전달하는 카테고리명

      if (!Array.isArray(state.items)) {
        console.error("state.items는 배열이 아닙니다.", state.items);
        state.filteredItems = []; // 배열이 아니면 빈 배열로 초기화
        state.filteredLength = 0;
        return; // 리듀서 실행을 중단
      }

      if (category === "all") {
        state.filteredItems = state.items;
        state.filteredLength = state.items.length;
      } else {
        state.filteredItems = state.items.filter(
          (product) => product.category === category
        );
        state.filteredLength = state.filteredItems.length;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        // console.log("action.payload", action.payload);
        state.status = "succeeded";
        state.items = action.payload; // 데이터 저장
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFilteredProducts } = mainSlice.actions;
export default mainSlice.reducer;
