import React from "react";
import { Link } from "react-router-dom";
import { PAGES, SINGLE_PRODUCT_TYPES } from "../../utils/constants/constants";
import { IProducts } from "../../utils/interface";

const ProductItem = (props: IProducts) => {
  return (
    <Link to={`${PAGES.PRODUCT}/${props.id}`}>
      <div
        className="relative overflow-hidden cursor-pointer hover:shadow-[0_20px_40px_1px] hover:scale-[101%] border rounded-lg duration-150 "
      >
        <figure className="flex items-center justify-center rounded-tl-lg rounded-tr-lg  w-full h-[150px] md:h-[300px] sm:h-[200px]">
          {props?.stock_status === SINGLE_PRODUCT_TYPES.OUT_OFF_STOCK && (
            <div
              className="absolute w-36 bg-[#890000] top-3 xs:top-4 right-[-48px] xs:right-[-40px] rotate-[45deg] flex items-center justify-center p-1 text-white text-[12px] xs:text-[16px]"
            >
              <p>{props?.notAvailable}</p>
            </div>
          )}
          <img
            src={props?.image_url[0]}
            alt="glasses"
            className=" object-cover"
          />
        </figure>
        <div className="text-center p-2 text-cyan-900 shadow-[0_-2px_30px_0]">
          <div>
            <p className="text-[#02020266] font-[600] text-[8px] md:text-[14px]">
              {props?.sku}
            </p>
            <h1 className="text-[14px] font-[600] sm:text-[16px] md:text-[18px] uppercase">
              {props?.name}
            </h1>
          </div>
          {props?.sale_price_string ? (
            <div className="flex justify-around">
              <p className="text-[10px] md:text-[14px] lg:text-[16px] font-[600]">
                {props?.sale_price_string}
                <span className="text-[10px] md:text-[14px] lg:text-[16px] ml-1">
                  AMD
                </span>
              </p>
              <p className="text-[10px] md:text-[14px] lg:text-[16px] line-through">
                {props?.regular_price_string}
                <span className="text-[10px] md:text-[14px] lg:text-[16px] ml-1">
                  AMD
                </span>
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-[10px] md:text-[14px] lg:text-[16px] font-[600]">
                {props?.regular_price_string}
                <span className="text-[10px] md:text-[14px] lg:text-[16px] ml-1">
                  AMD
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
