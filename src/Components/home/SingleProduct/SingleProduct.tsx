import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ISingleProducts,
  ICatchError,
} from "../../../utils/interface";
import useSingleProduct from "./hook/useSingleProduct";
import {
  LOCAL_STORAGE_KEYS,
  PAGES,
  SINGLE_PRODUCT_TYPES,
} from "../../../utils/constants/constants";
import SingleProductSkeleton from "../../../skeleton/SingleProductSkeleton";
import useSIngleProductTexts from "./hook/useSIngleProductTexts";
import { TfiBackLeft } from "react-icons/tfi";
import { AddToCartFunction } from "./components/utils/AddToCartFunction";
import Loader from "../../../utils/loader/Loader";
import { CiHeart } from "react-icons/ci";

const SingleProduct = () => {
  const [addToCartCatchError, setAddToCartCatchError] = useState<ICatchError>();
  const [addToCartLoading, setAddToCartLoading] = useState<boolean>(false);
  const [animationCart, setAnimationCart] = useState<boolean>(false);
  const [singleProduct, setSingleProduct] = useState<ISingleProducts>();
  const [showAddError, setShowAddError] = useState<string>("");
  const { isError, isLoading } = useSingleProduct(setSingleProduct);
  const { singleProductTexts } = useSIngleProductTexts();

  const addToCartHandler = () => {
    const cookie = localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN);
    if (!cookie) {
      setShowAddError("Խնդրում ենք մուտք գործել");
      setTimeout(() => {
        setShowAddError("")
      }, 1900)
      return;
    }
    AddToCartFunction(
      singleProduct?.id,
      setAddToCartCatchError,
      setAddToCartLoading,
      setAnimationCart,
    )
  }
  return (
    <div className="mx-auto border-2 p-2 rounded-xl">
      {!singleProductTexts ? (
        <div className="h-[30px] w-[150px] rounded-xl bg-gray-300 animate-pulse"></div>
      ) : (
        <Link
          to={PAGES.HOME}
          className="bg-[#384275] text-white px-3 py-1 rounded-xl flex items-center justify-center w-[150px]"
        >
          դեպի հետ
          <TfiBackLeft />
        </Link>
      )}
      {isLoading ? (
        <SingleProductSkeleton />
      ) : singleProduct?.images ? (
        <>
          <div className="relative mx-auto grid  grid-cols-1 gap-5 md:grid-cols-2 my-5 border rounded-xl p-2">
            <div className="relative flex items-center justify-center overflow-hidden">
              <img
                src={singleProduct?.images[0]?.src}
                alt="products"
                className="w-full h-[330px] md:h-[400px] lg:h-[500px] object-contain"
              />
            </div>
            <div
              className={
                animationCart
                  ? "w-full h-full z-[-1] absolute top-[20%] left-[-100px] opacity-0"
                  : "w-[0px] z-20 absolute top-[-130px] right-[20px] opacity-1 duration-[1.2s] animate-pulse"
              }
            >
              <img
                src={singleProduct?.images[0]?.src}
                alt="images"
                className="w-[200px] md:w-[400px] object-contain"
              />
            </div>
            <div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[16px]">{singleProduct?.sku}</p>
                    <h1 className="text-[18px] xs:text-[25px] md:text[20px] lg:text-[2rem] font-[700]">
                      {singleProduct?.name}
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  {singleProduct?.sale_price_string ? (
                    <div className="flex items-center justify-between">
                      <p className="text-[18px] md:text-[24px] lg:text-[32px] font-[600]">
                        {singleProduct?.sale_price_string}
                        <span>AMD</span>
                      </p>
                      <p className="line-through ml-2 text-[18px] md:text-[24px] lg:text-[32px] font-[600]">
                        {singleProduct?.regular_price_string}
                        <span>AMD</span>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-[20px] md:text-[25px] font-[600]">
                        {singleProduct?.price_string} <span>AMD</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-2">
                <div className="mt-2 lg:mt-4 lg:flex justify-between items-center">
                  <div>
                    <button
                      onClick={addToCartHandler}
                      className={
                        singleProduct?.stock_status ===
                          SINGLE_PRODUCT_TYPES.OUT_OFF_STOCK
                          ? "flex border-2 font-[600] text-[#a4a8a9] rounded-xl bg-transparent text-[14px] xs:text-[16px] px-5 py-[5px]  items-center justify-center"
                          : "border-2 text-[#384275] font-[600] border-[#384275] rounded-xl bg-transparent text-[14px] xs:text-[16px] px-5 py-[5px] flex items-center justify-center hover:border-cyan-700 cursor-pointer duration-150"
                      }
                    >{showAddError ? (
                      <p>{showAddError}</p>
                    ) : (
                      <>
                        <p className="select-none">{singleProductTexts?.addToCart.description}</p>
                        <CiHeart size={24} />
                      </>
                    )}
                    </button>
                    {addToCartLoading && (
                      <div className="flex items-center justify-center mt-2">
                        <Loader loading={addToCartLoading} size={20} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {isError ? (
        <div className="text-center">
          <h1>Error</h1>
        </div>
      ) : null}
    </div>
  );
};

export default SingleProduct;
