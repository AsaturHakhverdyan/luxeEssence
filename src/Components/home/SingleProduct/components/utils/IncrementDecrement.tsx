import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

const IncrementDecrement = ({
  name,
  stockQuantity,
  onChangeCount,
}: {
  name: string | undefined;
  stockQuantity: number | undefined;
  onChangeCount: (count: number) => void,
}) => {

  const [count, setCount] = useState<number>(1);


  const Counter = (option: string) => {
    console.log(stockQuantity)
    switch (option) {
      case "increment":
        if (stockQuantity !== null) {
          setCount(count + 1);
        } else if (stockQuantity && stockQuantity < count) {
          return false;
        }
        break;
      case "dicrement":
        if (count === 1) {
          return false;
        } else {
          setCount(count - 1);
        }
        break;
    }
    onChangeCount(count)
    return count;
  };
  return (
    <>
      <p>{name}</p>
      <div className="flex items-center justify-between mt-1 border rounded-xl px-4 py-2 xs:w-[130px]">
        <FaMinus
          size={14}
          onClick={() => Counter("dicrement")}
          className="cursor-pointer"
        />
        <p className="border px-[3px] text-[14px] rounded-xl shadow-[0_2px_5px_0_#384275] font-[600] select-none">
          {count}
        </p>
        <BsPlusLg
          size={14}
          onClick={() => Counter("increment")}
          className="cursor-pointer"
        />
      </div>
    </>
  );
};

export default IncrementDecrement;
