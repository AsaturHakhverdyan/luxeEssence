function BasketSkeleton({ count }: { count: number | undefined }) {
   return (
     <>
       {Array(count)
         .fill(0)
         .map((_, i) => (
           <div key={i}>
             <div
               role="status"
               className="rounded bg-gray-300 shadow animate-pulse w-full h-32 mt-3 "
             >
             </div>
           </div>
         ))}
     </>
   );
 };

export default BasketSkeleton;
