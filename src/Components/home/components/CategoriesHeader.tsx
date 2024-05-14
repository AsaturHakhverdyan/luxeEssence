import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { QUERY_PARAMS } from "../../../utils/constants/constants";
import useGetCategories from "../SingleProduct/hook/useGetCategories";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const CategoriesHeader = () => {
  const { categories } = useGetCategories();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMobaileMenu, setShowMobaileMenu] = useState<boolean>(true);
  const categoryName =
    searchParams.get(QUERY_PARAMS.CATEGORY) || QUERY_PARAMS.FRAMES;

  const putCategorisParams = (slug: string) => {
    setSearchParams({
      ...searchParams,
      category: slug,
    });
  };

  return (
    <div className="relative">
      <div className="hidden md:flex items-center justify-between my-4 max-w-[1040px] mx-auto">
        {categories?.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer px-3"
            onClick={() => putCategorisParams(category.slug)}
          >
            <p
              className={
                categoryName === category.slug
                  ? "font-[400] text-[16px] text-[#384275] border-b border-[#384275]"
                  : "font-[400] text-[16px] text-[#2D2A2E] border-b border-transparent hover:border-[#384275] hover:text-[#384275] duration-150"
              }
            >
              {category?.name}
            </p>
          </div>
        ))}
      </div>
      <div
        className="md:hidden"
        onClick={() => setShowMobaileMenu(!showMobaileMenu)}
      >
        <div className="p-2">
          {showMobaileMenu ? (
            <GiHamburgerMenu size={22} />
          ) : (
            <AiOutlineClose size={22} />
          )}
        </div>
        <div
          className={showMobaileMenu ? "hidden" : "absolute w-full z-50"}
        >
          <div className="h-screen w-full bg-black/30 pr-[20%]">
            <div className="bg-white h-screen p-4">
              {categories?.map((el, index) => (
                <div
                  key={index}
                  className="cursor-pointer [&:not(:first-child)]:mt-[35px]"
                  onClick={() => putCategorisParams(el.slug)}
                >
                  <p
                    className={
                      categoryName === el.slug
                        ? "font-[400] text-[16px] text-[#384275] border-b border-[#384275]"
                        : "font-[400] text-[16px] text-[#2D2A2E] border-b border-transparent hover:border-[#384275] hover:text-[#384275] duration-150"
                    }
                    onClick={() => setShowMobaileMenu(false)}
                  >
                    {el?.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesHeader;
