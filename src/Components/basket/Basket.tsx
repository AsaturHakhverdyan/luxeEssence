import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASKET_TEXTS, PAGES } from "../../utils/constants/constants";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import useGetBasket from "./utils/useGetBasket";
import BasketSkeleton from "../../skeleton/BasketSkeleton";
import BasketProductItem from "./BasketProductItem";
import { MdDeleteOutline } from "react-icons/md";
import { onRemoveAllBasket } from "./utils/onRemoveAllBasket";
import Loader from "../../utils/loader/Loader";
import useGetText from "./utils/useGetText";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IBasketText } from "../../utils/interface";

const Basket = () => {
  const navigate = useNavigate();
  const [basketRemoveLoading, setBasketRemoveLoading] = useState<boolean>(false);
  const [allBasketItemPrice, setAllBasketItemPrice] = useState<number>(0);
  const [basketText, setBasketText] = useState<IBasketText | undefined>();
  const { basketError, basketLoading } = useGetBasket();
  const basketProducts = useSelector((state: RootState) => state.basket);
  const checkoutBasket = useSelector((state: RootState) => state.checkoutBasket);

  useGetText(setBasketText, BASKET_TEXTS);
  useEffect(() => {
    if (basketProducts && basketProducts.length) {
      let prices = basketProducts.reduce((acc, basketItem) => {
        if (basketItem.prices.sale_price !== "0") {
          return acc + (+basketItem.prices.sale_price / 100) * basketItem.quantity;
        } else {
          return acc + (+basketItem.prices.regular_price / 100) * basketItem.quantity;
        }
      }, 0);
      setAllBasketItemPrice(prices);
    }
  }, [basketProducts]);

  const backTo = () => {
    navigate(PAGES.HOME)
  };

  return (
    <>
      {basketLoading ? (
        <>
          <div className="flex items-center flex-col xs:flex-row justify-center  xs:justify-between">
            <div className="w-32 h-8 animate-bounce rounded-2xl bg-gray-300"></div>
            <div className="w-44 h-8 animate-bounce rounded-2xl bg-gray-300"></div>
          </div>
          <BasketSkeleton count={basketProducts ? basketProducts.length : 0} />
        </>
      ) : (
        <div>
          <div className="rounded-2xl  px-3 py-1 mt-2 border-2 border-[#F1EFE8] text-[#384275] font-[600] flex items-center flex-col xs:flex-row justify-center  xs:justify-between">
            <div className="flex items-center">
              <div
                onClick={() => navigate(PAGES.HOME)}
                className="px-4 bg-[#F1EFE8] rounded-2xl py-2 cursor-pointer"
              >
                <AiOutlineHome />
              </div>
              <div
                onClick={backTo}
                className="px-4 bg-[#F1EFE8] rounded-2xl py-2 ml-2 cursor-pointer"
              >
                <IoMdArrowBack />
              </div>
            </div>
            <div className="flex items-center justify-center">

              {basketProducts && basketProducts.length ? (
                <div
                  className="px-4 py-[3px] cursor-pointer bg-[#F1EFE8] rounded-2xl text-black flex items-center"
                  onClick={() =>
                    onRemoveAllBasket(setBasketRemoveLoading)
                  }
                >
                  {basketText && <button>Մաքրել</button>}
                  {basketRemoveLoading ? (
                    <div className="mx-1 mt-2">
                      <Loader loading={basketRemoveLoading} size={20} />
                    </div>) :
                    <MdDeleteOutline size={20} className="ml-1" />
                  }
                </div>
              ) : (
                <div className="text-center text-[20px] font-[600]">
                  <h1>Հավանած ապրանքներ չկան</h1>
                </div>
              )}
            </div>
          </div>
          <div>
            {basketProducts && basketProducts.length
              ? basketProducts.map((basketItem) => (
                <BasketProductItem
                  key={basketItem.key}
                  itemKey={basketItem.key}
                  name={basketItem.name}
                  sku={basketItem.sku}
                  images={basketItem.images}
                  prices={basketItem.prices}
                  id={basketItem.id}
                  quantity={basketItem.quantity}
                  variation={basketItem.variation}
                  count={basketText && basketText.quantity.description}
                  checkoutBasket={checkoutBasket}
                />
              ))
              : null}
          </div>
          {basketProducts?.length && basketText ? (
            <div className="flex items-center justify-between p-[5px] border rounded-xl">
              <div className="flex">
                <p>{basketText["z-full-products-price"].description}`</p>
                <p className="ml-2 font-[600]">
                  {allBasketItemPrice.toLocaleString()}
                  <span className="ml-1">AMD</span>

                </p>
              </div>
            </div>
          ) : null}
        </div>
      )}
      {basketError && (
        <div>
          <h1>{basketError?.data.message}</h1>
        </div>
      )}
    </>
  );
};

export default Basket;

