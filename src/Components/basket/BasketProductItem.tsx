import React, { useState } from "react";
import { IBasketProduct } from "../../utils/interface";
import { onRemoveBasketItem } from "./utils/onRemoveBasketItem";
import { MdDeleteOutline } from "react-icons/md";
import Loader from "../../utils/loader/Loader";
import Utils from "./utils/Utils";

const BasketProductItem = (props: IBasketProduct) => {
  const [removeItemLoading, setRemoveItemLoading] = useState<boolean>(false);

  return (
    <div className="border my-3 p-6 rounded-2xl shadow-[0_4px_32px_rgba(141,141,141,.12)]">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center justify-between w-full md:w-[55%]">
          <div className="flex items-center justify-between">
            <div className="w-[80px] md:w-[120px] h-[80px] md:h-[120px] mx-2 flex items-center justify-center">
              <img
                src={props?.images[0]?.src}
                alt="glasses"
                className="object-cover"
              />
            </div>
            <div className="ml-2">
              <p className="text-[12px] md:text-base text-[#353535]">
                {props?.sku}
              </p>
              <p className="text-[12px] md:text-base font-[700] text-[#353535]">
                {props?.name}
              </p>
            </div>
          </div>
          {/* <div className="px-[15px] py-[5px] border rounded-xl flex items-center text-center">
            <h1 className="text-gray-500">{props?.count}</h1>
            <span className="ml-3 font-[00]">{props?.quantity}</span>
          </div> */}
        </div>
        <div className="flex items-center justify-center">
          {props?.prices?.sale_price !== props?.prices?.regular_price ? (
            <div>
              <p className="text-[14px] md:text-[14px] lg:text-[16px] font-[600]">
                {Utils(props.prices?.sale_price, props.quantity)}
                <span className="text-[14px] md:text-[14px] lg:text-[16px]">
                  {props?.prices.currency_code}
                </span>
              </p>
              <p className="text-[14px] md:text-[14px] lg:text-[16px] line-through">
                {Utils(props.prices?.regular_price, props.quantity)}
                <span className="text-[14px] md:text-[14px] lg:text-[16px]">
                  {props?.prices.currency_code}
                </span>
              </p>
            </div>
          ) : (
            <div>
              <p className="text-[14px] md:text-[14px] lg:text-[16px] font-[600]">
                {Utils(props.prices?.regular_price, props.quantity)}
                <span className="text-[14px] md:text-[14px] lg:text-[16px] ml-1">
                  {props?.prices.currency_code}
                </span>
              </p>
            </div>
          )}
          {removeItemLoading ? (
            <div className="ml-4 mt-1">
              <Loader loading={removeItemLoading} size={20} />
            </div>)
            :
            (<div className="ml-4 cursor-pointer">
              <MdDeleteOutline
                onClick={() =>
                  onRemoveBasketItem(props.itemKey, setRemoveItemLoading)
                }
              />
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default BasketProductItem;
