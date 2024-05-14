import React from "react";
import axios from "axios";
import { setBasket } from "../../../../../store/createSlice";
import Store from "../../../../../store/store";
import {
  CONSUMER_KEY,
  LOCAL_STORAGE_KEYS,
  SINGLE_PRODUCT_TYPES,
} from "../../../../../utils/constants/constants";
import {
  ICatchError,
  IVariationAttributes,
} from "../../../../../utils/interface";

export const AddToCartFunction = async (
  id: number | undefined,
  count: number,
  setAddToCartCatchError: React.Dispatch<
    React.SetStateAction<ICatchError | undefined>
  >,
  setAddToCartLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setAnimationCart: React.Dispatch<React.SetStateAction<boolean>>,
  variationAdd: string | undefined,
  variationAttributes: IVariationAttributes[] | undefined
) => {

  const data: {
    id?: number;
    quantity: number;
    variation?: IVariationAttributes[] | undefined;
  } = {
    id: id,
    quantity: count,
  };
  if (variationAdd === SINGLE_PRODUCT_TYPES.IN_STOCK) {
    data.variation = variationAttributes;
  }
  try {
    setAddToCartLoading(true);
    setAnimationCart(true);
    if (!id) {
      return false;
    } else {
      const response = await axios.post(
        `/wc/store/v1/cart/add-item?${CONSUMER_KEY}`,
        data,
        {
          headers: {
            Nonce: localStorage.getItem(LOCAL_STORAGE_KEYS.NONCE),
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${localStorage.getItem(
              LOCAL_STORAGE_KEYS.JWT_TOKEN
            )}`,
          },
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
