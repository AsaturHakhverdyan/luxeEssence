import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { QUERY_PARAMS } from "../../../utils/constants/constants";
import { ICatchError, IProducts } from "../../../utils/interface";

const useBaseProducts = (
  URL_PARAMS: string,
) => {
  const [productsData, setProductsData] = useState<IProducts[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [currencyName, setCurrencyName] = useState<string>();
  const [searchParams] = useSearchParams();
  const [isError, setIsError] = useState<ICatchError>();
  const productPerPage: number = 9;
  const OrderBy =
    searchParams.get(QUERY_PARAMS.ORDER_BY) || "";
  const categories = searchParams.get(QUERY_PARAMS.CATEGORY) || "";



  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const correctData = await axios.get(`https://hydralab-dev.10web.site/wp-json/get/products?category=${categories}&orderby=${OrderBy}`)
        if (correctData) {
          setProductsData(correctData.data);
          setCurrencyName(correctData.data.currency);
        }
      } catch (err: any | undefined) {
        setIsError(err);
        console.log(err)
      } finally {
        setIsloading(false);
      }
    })();
  }, [categories, OrderBy]);

  return {
    productsData,
    isError,
    isLoading,
    productPerPage,
    currencyName,
  };
};

export default useBaseProducts;
