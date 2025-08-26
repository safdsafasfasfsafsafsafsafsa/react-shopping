/*
https://velog.io/@sweet_pumpkin/%EB%AC%B4%EC%9E%91%EC%A0%95%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0-%EC%B5%9C%EA%B3%A0-%EB%A6%AC%EB%8D%95%EC%8A%A4%EC%95%BC-%EA%B3%A0%EB%A7%99%EB%8B%A4-Redux-Redux-Toolkit-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0
https://dev-astra.tistory.com/550
*/

import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./slices/mainSilce";
import idReducer from "./slices/idSilce";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    id: idReducer,
    cart: cartReducer,
  },
});
