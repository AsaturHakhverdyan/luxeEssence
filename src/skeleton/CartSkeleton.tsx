function CartSkeleton({ count }: { count: number }) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            <div
              role="status"
              className=" max-w-sm rounded bg-gray-300 shadow animate-pulse w-full h-[150px] md:h-[300px] sm:h-[200px] "
            >
              <div className="flex justify-center items-center mb-4 bg-gray-300 rounded object-cover ">
              </div>
            </div>
            <div className="p-2 text-center">
              <div className="h-[17px] bg-gray-200 rounded-full w-48 mb-2 mx-auto"></div>
              <div className="h-[23px] bg-gray-200 rounded-full w-48 mb-2 mx-auto"></div>
              <div className="h-[18px] bg-gray-200 rounded-full w-48 mx-auto"></div>
            </div>
          </div>
        ))}
    </>
  );
}

export default CartSkeleton;
