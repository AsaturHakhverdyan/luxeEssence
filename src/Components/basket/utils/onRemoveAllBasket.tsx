import axios from "axios";
import { setBasket } from "../../../store/createSlice";
import Store from "../../../store/store";
import {
  LOCAL_STORAGE_KEYS,
} from "../../../utils/constants/constants";
import { getNonce } from "./Utils";

export const onRemoveAllBasket = (
  setBasketRemoveLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  (async () => {
    try {
      const cookie = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN) || '')
      setBasketRemoveLoading(true)
      const nonce = await getNonce()
      const { data } = await axios.post(`https://hydralab-dev.10web.site/wp-json/clear/wishlist?cookie=${cookie}`,
        {
          headers: {
            nonce
          }
        }
      );
      if (data) {
        Store.dispatch(setBasket(data));
        setBasketRemoveLoading(false)
      }
    } catch (error) {
      setBasketRemoveLoading(false)
      console.error(error)
    }
  })();
};
