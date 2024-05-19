import React from "react";
import axios from "axios";
import { setBasket } from "../../../../../store/createSlice";
import Store from "../../../../../store/store";
import {
  LOCAL_STORAGE_KEYS,
} from "../../../../../utils/constants/constants";
import {
  ICatchError,
  IVariationAttributes,
} from "../../../../../utils/interface";
import { getNonce } from "../../../../basket/utils/Utils";

export const AddToCartFunction = async (
  id: number | undefined,
  setAddToCartCatchError: React.Dispatch<
    React.SetStateAction<ICatchError | undefined>
  >,
  setAddToCartLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setAnimationCart: React.Dispatch<React.SetStateAction<boolean>>,
) => {

  const cookie = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN) || '');

  try {
    setAddToCartLoading(true);
    setAnimationCart(true);
    if (!id) {
      return false;
    } else {
      const nonce = await getNonce()
      const response = await axios.post(`https://hydralab-dev.10web.site/wp-json/add/wishlist?cookie=${cookie}`,
        {
          id: id,
          quantity: 1
        },
        {
          headers: {
            nonce
          }
        }
      );
      if (response.status) {
        Store.dispatch(setBasket(response.data.items));
        setAddToCartLoading(false);
        setAnimationCart(false);
        setAddToCartCatchError(undefined);
      }
    }
  } catch (error: any | undefined) {
    setAddToCartCatchError(error);
    setAddToCartLoading(false);
    setTimeout(() => {
      setAddToCartCatchError(undefined);
    }, 4000);
  }
};
