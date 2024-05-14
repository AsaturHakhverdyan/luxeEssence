import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ISingleProducts,
  ICatchError,
  IVariationAttributes,
} from "../../../utils/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useSingleProduct from "./hook/useSingleProduct";
import {
  ERROR_MASSEGE,
  PAGES,
  SINGLE_PRODUCT_TYPES,
  SWIPER_SINGLE_CONFIG,
} from "../../../utils/constants/constants";
import SingleProductSkeleton from "../../../skeleton/SingleProductSkeleton";
import useSIngleProductTexts from "./hook/useSIngleProductTexts";
import GlassesInfo from "./components/GlassesInfo";
import LinsInfo from "./components/LinsInfo";
import { TfiBackLeft } from "react-icons/tfi";
import { AddToCartFunction } from "./components/utils/AddToCartFunction";
import Loader from "../../../utils/loader/Loader";
import { CiHeart } from "react-icons/ci";
import IncrementDecrement from "./components/utils/IncrementDecrement";

const SingleProduct = () => {
  const [variationAttributes, setVariationAttributes] = useState<
    IVariationAttributes[]
  >([]);
  const [addToCartCatchError, setAddToCartCatchError] = useState<ICatchError>();
  const [addToCartLoading, setAddToCartLoading] = useState<boolean>(false);
  const [animationCart, setAnimationCart] = useState<boolean>(false);
  const [singleProduct, setSingleProduct] = useState<ISingleProducts>();
  const [productCount, setProductCount] = useState<number>(1);
  const { isError, isLoading } = useSingleProduct(setSingleProduct);
  const { singleProductTexts } = useSIngleProductTexts();
  const choose = singleProductTexts?.toChoose?.description;

  const onChangeCount = (count: number) => {
    setProductCount(count + 1);
  };
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
              <Swiper
                {...SWIPER_SINGLE_CONFIG}
                modules={[Autoplay, Pagination, Navigation]}
                className="rounded-xl"
              >
                {singleProduct?.images.map((image) => (
                  <SwiperSlide key={image.src}>
                    <img
                      src={image?.src}
                      alt="products"
                      className="w-full h-[330px] md:h-[400px] lg:h-[500px] object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {singleProduct?.stock_status ===
                SINGLE_PRODUCT_TYPES.OUT_OFF_STOCK && (
                  <div className="absolute px-3 rounded-full text-center bg-red-500 left-1 top-1  flex items-center justify-center p-1 text-white z-10">
                    <p>{singleProductTexts?.notInStock.description}</p>
                  </div>
                )}
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
                  {singleProduct?.stock_quantity ? (
                    <div className="flex font-[400]">
                      <p>{singleProductTexts?.count.description}</p>
                      <span className="ml-2 font-[500]">
                        {singleProduct?.stock_quantity}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="mt-2">
                <IncrementDecrement
                  name={singleProductTexts?.toChoose.description}
                  stockQuantity={singleProduct?.stock_quantity}
                  onChangeCount={onChangeCount}
                />
                <div className="mt-2 lg:mt-4 lg:flex justify-between items-center">
                  <div>
                    <button
                      disabled={
                        singleProduct?.stock_status ===
                          SINGLE_PRODUCT_TYPES.OUT_OFF_STOCK
                          ? true
                          : false
                      }
                      onClick={() =>
                        AddToCartFunction(
                          singleProduct?.id,
                          productCount,
                          setAddToCartCatchError,
                          setAddToCartLoading,
                          setAnimationCart,
                          singleProduct?.stock_status,
                          variationAttributes
                        )
                      }
                      className={
                        singleProduct?.stock_status ===
                          SINGLE_PRODUCT_TYPES.OUT_OFF_STOCK
                          ? "flex border-2 font-[600] text-[#a4a8a9] rounded-xl bg-transparent text-[14px] xs:text-[16px] px-5 py-[5px]  items-center justify-center"
                          : "border-2 text-[#384275] font-[600] border-[#384275] rounded-xl bg-transparent text-[14px] xs:text-[16px] px-5 py-[5px] flex items-center justify-center hover:border-cyan-700 cursor-pointer duration-150"
                      }
                    >
                      <p>{singleProductTexts?.addToCart.description}</p>
                      <CiHeart size={24} />
                    </button>
                    {addToCartCatchError?.data.message ===
                      ERROR_MASSEGE.NoMatchingVariation && (
                        <p className="text-red-500 font-[600]">
                          {singleProductTexts?.fillAllFields.description}
                        </p>
                      )}
                    {addToCartCatchError?.data.message ===
                      ERROR_MASSEGE.ThisItemIsAreadyInCart && (
                        <p className="text-red-500 font-[600]">
                          {singleProductTexts?.alreadyInTheCart.description}
                        </p>
                      )}
                    {addToCartLoading && (
                      <div className="flex items-center justify-center">
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
          <h1>{isError.data.message}</h1>
        </div>
      ) : null}
    </div>
  );
};

export default SingleProduct;