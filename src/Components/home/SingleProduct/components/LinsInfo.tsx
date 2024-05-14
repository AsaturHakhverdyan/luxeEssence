import {
  ISinglePageTexts,
  ISingleProductAttributes,
  IVariationAttributes,
} from "../../../../utils/interface";
import IncrementDecrement from "./utils/IncrementDecrement";
import SelectComponent from "./utils/SelectComponent";

const LinsInfo = ({
  singleProductTexts,
  variation_attributes,
  choose,
  setVariationAttributes,
  variationAttributes,
  stockQuantity,
  onChangeCount,
}: {
  singleProductTexts: ISinglePageTexts | undefined;
  variation_attributes: ISingleProductAttributes[];
  choose: string | undefined;
  setVariationAttributes: React.Dispatch<
    React.SetStateAction<IVariationAttributes[]>
  >;
  variationAttributes: IVariationAttributes[];
  stockQuantity: number | undefined;
  onChangeCount: (count: number) => void;
}) => {
  return (
    <div>
      <div className="flex items-center mb-3">
        <img src={singleProductTexts?.oneItemPriceIcon.description} alt="worning" />
        <p className="mx-2">
          {singleProductTexts?.oneItemPrice.description}
        </p>
      </div>
      {variation_attributes?.map((elem, index) => {
        return (
          <div
            key={index}
            className={`border-2 p-2 rounded-lg ${
              index === 1 ? "mt-0 md:mt-3" : ""
            }`}
          >
            <h1 className="text-[20px] font-[600]">{elem?.name}</h1>
            <div className="">
              <div className="mt-3 md:mt-0  xs:flex justify-between items-center">
                {elem?.types.map((type, index) => {
                  return (
                    <SelectComponent
                      key={index}
                      name={type.name}
                      choose={choose}
                      options={type.options}
                      setVariationAttributes={setVariationAttributes}
                      variationAttributes={variationAttributes}
                    />
                  );
                })}
                <div className="mt-3 md:mt-0 xs:w-[120px]">
                  <IncrementDecrement
                    name={singleProductTexts?.count.description}
                    stockQuantity={stockQuantity}
                    onChangeCount={onChangeCount}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LinsInfo;
