import axios from "axios";
import { setBasket } from "../../../store/createSlice";
import Store from "../../../store/store";
import { LOCAL_STORAGE_KEYS } from "../../../utils/constants/constants";
import { getNonce } from "./Utils";

export const onRemoveBasketItem = async (
  key: string | number,
  setRemoveItemLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const cookie = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN) || "")
  setRemoveItemLoading(true);
  const nonce = await getNonce()
  const { data } = await axios.post(
    `https://hydralab-dev.10web.site/wp-json/removeItem/wishlist?cookie=${cookie}`,
    {
      key,
    },
    {
      headers: {
        nonce
      },
    }
  );
  if (data) {
    Store.dispatch(setBasket(data.items));
    setRemoveItemLoading(false);
  }
};
