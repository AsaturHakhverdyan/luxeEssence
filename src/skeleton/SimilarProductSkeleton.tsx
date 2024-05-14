function SimilarProductSkeleton({ count }: { count: number }) {

   return (
     <>
       {Array(count)
         .fill(0)
         .map((_, i) => (
           <div key={i}>
             <div
               role="status"
               className="rounded bg-gray-200 shadow animate-pulse w-[250px] h-[150px] "
             >
             </div>
             <div className="p-2 text-center">
               <div className="h-2.5 bg-gray-200 rounded-full w-12 mb-4 mx-auto"></div>
               <div className="h-3.5 bg-gray-200 rounded-full w-24 mb-2.5 mx-auto"></div>
               <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-2.5 mx-auto"></div>
             </div>
           </div>
         ))}
     </>
   );
 }
 
 export default SimilarProductSkeleton;
 