import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import { TfiFaceSad } from "react-icons/tfi";
import useBaseProducts from "./hooks/useBaseProducts";
import useHomePageTexts from "./hooks/useHomePageTexts";
import CategoriesHeader from "./components/CategoriesHeader";
import ChooseComponent from "../header/components/SortHeader";

const HomePage: React.FC = () => {
  const [URL_PARAMS, setURL_PARAMS] = useState<string>("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let currentQueries = "";
    const newCurrentQueries = Array.from(searchParams);
    for (const [key, value] of newCurrentQueries) {
      if (key.includes("pa")) {
        currentQueries += `&filter[${key}]=${value}`;
      } else {
        currentQueries += "";
      }
    }
    setURL_PARAMS(currentQueries);
  }, [URL_PARAMS, searchParams]);

  const {
    isError,
    isLoading,
    productsData,
  } = useBaseProducts(URL_PARAMS);

  const { homePageTexts } = useHomePageTexts();
  return (
    <div>
      <div className="border rounded-md">
        <CategoriesHeader />
      </div>
      <div className="flex  items-center justify-between my-[24px]">
        <div>
          <ChooseComponent homePageTexts={homePageTexts} />
        </div>
      </div>
      <div className="sm:grid">
        <div className="gap-3 grid grid-cols-2 sm:mt-0 sm:grid sm:grid-cols-1 col-span-2 md:grid-cols-2 md:col-span-3 lg:grid-cols-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : !!productsData ? (
            productsData.map((item, index) => (
              <ProductItem
                key={index}
                id={item.id}
                name={item.name}
                regular_price_string={item.regular_price_string}
                sale_price_string={item.sale_price_string}
                image_url={item.image_url}
                sku={item.sku}
                stock_status={item.stock_status}
                notAvailable={homePageTexts?.product.notInStock.description}
              />
            ))
          ) : (
            <div className="flex">
              <h1 className="w-full">
                <TfiFaceSad size={24} />
                {homePageTexts?.filter?.noProduct?.description}
              </h1>
            </div>
          )}
          {isError ? <h1>{isError?.data?.message}</h1> : null}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
