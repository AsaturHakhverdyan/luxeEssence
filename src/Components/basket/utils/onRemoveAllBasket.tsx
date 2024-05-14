import axios from "axios";
import { setBasket } from "../../../store/createSlice";
import Store from "../../../store/store";
import {
  CONSUMER_KEY,
  LOCAL_STORAGE_KEYS,
} from "../../../utils/constants/constants";
import { IBasketProduct } from "../../../utils/interface";

export const onRemoveAllBasket = (
  setBasketRemoveLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  (async () => {
    setBasketRemoveLoading(true)
    const { data } = await axios.delete(
      `/wc/store/cart/items?${CONSUMER_KEY}`,
      {
        headers: {
          Nonce: `${localStorage.getItem(LOCAL_STORAGE_KEYS.NONCE)}`,
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            LOCAL_STORAGE_KEYS.JWT_TOKEN
          )}`,
        },
      }
    );
    if (data) {
      Store.dispatch(setBasket(data));
      setBasketRemoveLoading(false)
    }
  })();
};
