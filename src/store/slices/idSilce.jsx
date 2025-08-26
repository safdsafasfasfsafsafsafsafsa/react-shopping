import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById } from "../asyncTrunks/productsTrunks";

const idSlice = createSlice({
  name: "id",
  initialState: {
    itemById: [],
    status: "idle",
    error: null,
  },
  // reducers: {
  //   setProductById: (state, action) => {
  //     const id = action.payload;

  //     if (id === "all") {
  //       state.filteredItems = state.items;
  //       state.filteredLength = state.items.length;
  //     } else {
  //       state.filteredLength = state.filteredItems.length;
  //     }
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.itemById = action.payload; // 데이터 저장
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const { setProductById } = idSlice.actions;
export default idSlice.reducer;
