import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../asyncTrunks/productsTrunks";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    items: [],
    filteredItems: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      const category = action.payload; // 외부에서 전달하는 카테고리명

      if (category === "all") {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(
          (product) => product.category === category
        );
      }
    },

    getProduct: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
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
