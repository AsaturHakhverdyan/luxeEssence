import { configureStore } from "@reduxjs/toolkit";
import getBasket from "./createSlice";

const Store = configureStore({
  reducer: getBasket,
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
