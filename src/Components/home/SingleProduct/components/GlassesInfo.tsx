import { ISinglePageTexts } from "../../../../utils/interface";
import IncrementDecrement from "./utils/IncrementDecrement";

const GlassesInfo = ({
  singleProductTexts,
  stockQuantity,
  onChangeCount,
}: {
  stockQuantity: number | undefined;
  singleProductTexts: ISinglePageTexts | undefined;
  onChangeCount: (count: number) => void;
}) => {
  return (
    <div>
      <div className=" w-full">
        <IncrementDecrement
          name={singleProductTexts?.toChoose.description}
          stockQuantity={stockQuantity}
          onChangeCount={onChangeCount}
        />
      </div>
    </div>
  );
};

export default GlassesInfo;
