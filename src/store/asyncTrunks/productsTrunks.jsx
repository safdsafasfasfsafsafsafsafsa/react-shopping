import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await axios.get(`/products`);
    return response.data;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  }
);
