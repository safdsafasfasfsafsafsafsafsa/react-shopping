import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const fetchCarts = createAsyncThunk("carts/fetchCarts", async () => {
  const response = await axios.get("/carts");
  return response.data;
});
