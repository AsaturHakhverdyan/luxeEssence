import {
  IOptionsAttributes,
  IVariationAttributes,
} from "../../../../../utils/interface";

const SelectComponent = ({
  name,
  choose,
  options,
  setVariationAttributes,
  variationAttributes,
}: {
  name: string | undefined;
  choose: string | undefined;
  options: IOptionsAttributes[] | undefined;
  setVariationAttributes: React.Dispatch<
    React.SetStateAction<IVariationAttributes[]>
  >;
  variationAttributes: IVariationAttributes[];
}) => {
  const onchange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const taxonomy = options?.find((elem) => elem.name === event.target.value)?.taxonomy;
    const name = options?.find((elem) => elem.name === event.target.value)?.name;
    if (taxonomy && name) {
      const newVariationAttr = [...variationAttributes];
      const findAttribute = newVariationAttr.find((elem) => elem.attribute === taxonomy);
      if (findAttribute) {
        findAttribute.value = name;
      } else {
        newVariationAttr.push({
          attribute: taxonomy,
          value: name,
        });
      }
      setVariationAttributes(newVariationAttr);
    }
  };

  return (
    <div className="mr-3">
      <h1 className="font-[500]">{name}</h1>
      <div className="p-2 border rounded-xl">
        <select
          onChange={onchange}
          className="w-full outline-none cursor-pointer pb-1"
        >
          <option hidden>{choose}</option>
          {options?.map((el, i) => (
            <option key={i}>{el.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectComponent;
