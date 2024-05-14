// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { BASKET_TEXTS, PAGES } from "../../utils/constants/constants";
// import { AiOutlineHome } from "react-icons/ai";
// import { IoMdArrowBack } from "react-icons/io";
// import useGetBasket from "./utils/useGetBasket";
// import BasketSkeleton from "../../skeleton/BasketSkeleton";
// import BasketProductItem from "./BasketProductItem";
// import { MdDeleteOutline } from "react-icons/md";
// import { onRemoveAllBasket } from "./utils/onRemoveAllBasket";
// import Loader from "../../utils/loader/Loader";
// import useGetText from "./utils/useGetText";
// import BorderComponent from "../CheckOut/components/BorderComponent";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../store/store";
// import { IBasketText } from "../../utils/interface";
// import { setCheckoutBasket } from "../../store/createSlice";

// const Basket = () => {
//   const navigate = useNavigate();
//   const [basketRemoveLoading, setBasketRemoveLoading] = useState<boolean>(false);
//   const [allBasketItemPrice, setAllBasketItemPrice] = useState<number>(0);
//   const [basketText, setBasketText] = useState<IBasketText | undefined>();
//   const { basketError, basketLoading } = useGetBasket();
//   const basketProducts = useSelector((state: RootState) => state.basket);
//   const checkoutBasket = useSelector((state: RootState) => state.checkoutBasket);
//   const dispatch = useDispatch();

//   useGetText(setBasketText, BASKET_TEXTS);

//   const currency = basketProducts?.map(el => el.prices.currency_code);
//   const producIds = basketProducts?.map(basketProductsItem => basketProductsItem.id);

//   useEffect(() => {
//     let prices = basketProducts.reduce((acc, basketItem) => {
//       if (basketItem.prices.sale_price !== "0") {
//         return acc + (+basketItem.prices.sale_price / 100) * basketItem.quantity;
//       } else {
//         return acc + (+basketItem.prices.regular_price / 100) * basketItem.quantity;
//       }
//     }, 0);
//     setAllBasketItemPrice(prices);
//   }, [basketProducts]);

//   const onCheckBasketItem = (id: number) => {
//     const findInsideBasket = basketProducts.find((el) => el.id === id);
//     const findInsideCheckoutBasket = checkoutBasket.find((el) => el.id === id);
//     if (findInsideBasket && !findInsideCheckoutBasket) {
//       dispatch(setCheckoutBasket([...checkoutBasket, findInsideBasket]));
//     } else if (findInsideBasket && findInsideCheckoutBasket) {
//       const newBasket = checkoutBasket.filter((el) => el.id !== id);
//       dispatch(setCheckoutBasket(newBasket));
//     }
//   };

//   const onCheckCkeckOutBasket = () => {
//     if (checkoutBasket.length === basketProducts.length) {
//       dispatch(setCheckoutBasket([]));
//     } else {
//       dispatch(setCheckoutBasket([...basketProducts]));
//     }
//   };

//   const backTo = () => {
//     producIds[0] === undefined
//       ? navigate(PAGES.HOME)
//       : navigate(`${PAGES.PRODUCT}/${producIds[0]}`);
//   };

//   return (
//     <>
//       {basketLoading ? (
//         <>
//           <div className="flex items-center flex-col xs:flex-row justify-center  xs:justify-between">
//             <div className="w-32 h-8 animate-bounce rounded-2xl bg-gray-300"></div>
//             <div className="w-44 h-8 animate-bounce rounded-2xl bg-gray-300"></div>
//           </div>
//           <BasketSkeleton count={basketProducts.length} />
//         </>
//       ) : (
//         <div>
//           <div className="rounded-2xl  px-3 py-1 mt-2 border-2 border-[#F1EFE8] text-[#384275] font-[600] flex items-center flex-col xs:flex-row justify-center  xs:justify-between">
//             <div className="flex items-center">
//               <div
//                 onClick={() => navigate(PAGES.HOME)}
//                 className="px-4 bg-[#F1EFE8] rounded-2xl py-2 cursor-pointer"
//               >
//                 <AiOutlineHome />
//               </div>
//               <div
//                 onClick={backTo}
//                 className="px-4 bg-[#F1EFE8] rounded-2xl py-2 ml-2 cursor-pointer"
//               >
//                 <IoMdArrowBack />
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               {basketRemoveLoading && (
//                 <div className="mx-1 mt-2">
//                   <Loader loading={basketRemoveLoading} size={20} />
//                 </div>
//               )}
//               {basketProducts.length ? (
//                 <div
//                   className="px-4 py-[3px] cursor-pointer bg-[#F1EFE8] rounded-2xl text-black flex items-center"
//                   onClick={() =>
//                     onRemoveAllBasket(setBasketRemoveLoading)
//                   }
//                 >
//                   {basketText && <button>{basketText?.["z-clear-basket"].description}</button>}
//                   <MdDeleteOutline size={20} className="ml-[5px]" />
//                 </div>
//               ) : (
//                 <div className="text-center text-[20px] font-[600]">
//                   <h1>{basketText && basketText?.["z-basket-is-empty"].description}</h1>
//                 </div>
//               )}
//             </div>
//           </div>
//           {basketText && basketProducts.length ? (
//             <div className="mt-8">
//               <p className="text-[#353535] text-[16px] md:text-[24px] font-[600]">
//                 {basketText.basket.description}
//               </p>
//               <label className="flex items-center m-[20px_10px]">
//                 <input
//                   type="checkbox"
//                   className="mx-2"
//                   checked={
//                     checkoutBasket.length === basketProducts.length ? true : false
//                   }
//                   onChange={onCheckCkeckOutBasket}
//                 />
//                 {basketText["mark-all"].description}
//               </label>
//               <div className="my-4">
//                 <BorderComponent bg={"bg-[#EFEFEF]"} />
//               </div>
//             </div>
//           ) : null}
//           <div>
//             {basketProducts.length
//               ? basketProducts.map((basketItem) => (
//                 <BasketProductItem
//                   key={basketItem.key}
//                   itemKey={basketItem.key}
//                   name={basketItem.name}
//                   sku={basketItem.sku}
//                   images={basketItem.images}
//                   prices={basketItem.prices}
//                   id={basketItem.id}
//                   quantity={basketItem.quantity}
//                   variation={basketItem.variation}
//                   count={basketText && basketText.quantity.description}
//                   onCheckBasketItem={onCheckBasketItem}
//                   checkoutBasket={checkoutBasket}
//                 />
//               ))
//               : null}
//           </div>
//           {basketProducts?.length && basketText && currency ? (
//             <div className="flex items-center justify-between p-[5px] border rounded-xl">
//               <div className="flex">
//                 <p>{basketText["z-full-products-price"].description}`</p>
//                 <p className="ml-2 font-[600]">
//                   {allBasketItemPrice.toLocaleString()}
//                   <span>{currency[0]}</span>
//                 </p>
//               </div>
//               <div>
//                 <Link to={PAGES.CHECKOUT}>
//                   <button className="bg-[#F1EFE8] p-[5px_15px] rounded-xl">
//                     {basketText["z-to-buy"].description}
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ) : null}
//         </div>
//       )}
//       {basketError && (
//         <div>
//           <h1>{basketError?.data.message}</h1>
//         </div>
//       )}
//     </>
//   );
// };

// export default Basket;
import React from 'react'

const Basket = () => {
  return (
    <div>Basket</div>
  )
}

export default Basket
