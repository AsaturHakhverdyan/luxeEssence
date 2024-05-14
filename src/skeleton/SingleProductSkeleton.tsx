const SingleProductSkeleton = () => {
   return (
     <div className="mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 my-5">
       <div
         role="status"
         className="rounded bg-gray-300 shadow animate-pulse w-full h-[330px] md:h-[400px] lg:h-[500px] "
       ></div>
       <div className="p-2 border">
         <div className="h-4 bg-gray-200 rounded-full w-24 mb-2.5"></div>
         <div className="h-5 bg-gray-200 rounded-full w-48 mb-2.5"></div>
         <div className="h-4 bg-gray-200 rounded-full w-28 mb-2.5"></div>
         <div className="mt-5 lg:mt-10 lg:flex justify-between items-center">
           <div className="h-7 bg-gray-200 rounded-full w-40 mb-2.5"></div>
           <div className="h-5 bg-gray-200 rounded-full w-52 mb-2.5"></div>
         </div>
       </div>
     </div>
   );
 };
 
 export default SingleProductSkeleton;
 