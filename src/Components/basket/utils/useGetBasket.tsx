import { useEffect, useState } from "react";
import { setBasket } from "../../../store/createSlice";
import {
  LOCAL_STORAGE_KEYS,
} from "../../../utils/constants/constants";
import { ICatchError } from "../../../utils/interface";
import { useDispatch } from "react-redux"
import axios from "axios";

const useGetBasket = () => {

  const [basketLoading, setBasketLoading] = useState<boolean>(false);
  const [basketError, setBasketError] = useState<ICatchError>();
  const dispatch = useDispatch();
  const cookie = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN) || '');

  useEffect(() => {
    (async () => {
      try {
        setBasketLoading(true);
        const { data } = await axios.get(`https://hydralab-dev.10web.site/wp-json/wc/store/v1/cart?cookie=${cookie}`);
        if (data) {
          dispatch(setBasket(data.items));
        }
      } catch (error: any | undefined) {
        setBasketError(error);
      } finally {
        setBasketLoading(false);
      }
    })();
  }, [dispatch, cookie]);

  return {
    basketLoading,
    basketError,
  };
};

export default useGetBasket;
