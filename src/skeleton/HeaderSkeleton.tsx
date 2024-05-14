const HeaderSkeleton = () => {
  return (
    <div className="py-[20px]  px-2 mb-[30px] border-b-2w-full md:flex justify-between items-center animate-pulse">
      <div className="flex justify-between my-3">
        <div className="w-[50px] h-[30px] bg-gray-300 shadow animate-pulse rounded-xl md:flex hidden "></div>
        <div className="w-[50px] h-[30px] bg-gray-300 shadow animate-pulse rounded-xl "></div>
        <div className="w-[70px] h-[30px] bg-gray-300 shadow animate-pulse rounded-xl "></div>
      </div>
      <div className="h-[30px] w-full md:w-[400px] bg-gray-300 shadow animate-pulse rounded-xl"></div>
    </div>
  );
};

export default HeaderSkeleton;
