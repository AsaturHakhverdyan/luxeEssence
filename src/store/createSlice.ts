import { createSlice } from "@reduxjs/toolkit";
import { IBasketProduct } from "../utils/interface";

const getBasket = createSlice({
  name: "basket",
  initialState: {
    basket: [] as IBasketProduct[],
    checkoutBasket: [] as IBasketProduct[],
  },
  reducers: {
    setBasket(state, action) {
      state.basket = action.payload;
    },
    setCheckoutBasket(state, action) {
      state.checkoutBasket = action.payload;
    },
  },
});

export const { setBasket, setCheckoutBasket } = getBasket.actions;
export default getBasket.reducer;
