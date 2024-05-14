import axios from "axios";
import { setBasket } from "../../../store/createSlice";
import Store from "../../../store/store";
import { CONSUMER_KEY, LOCAL_STORAGE_KEYS } from "../../../utils/constants/constants";

export const onRemoveBasketItem = async (
  key: string | number,
  setRemoveItemLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setRemoveItemLoading(true);
  const { data } = await axios.post(
    `/wc/store/cart/remove-item?${CONSUMER_KEY}`,
    JSON.stringify({
      key,
    }),
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
    Store.dispatch(setBasket(data.items));
    setRemoveItemLoading(false);
  }
};
