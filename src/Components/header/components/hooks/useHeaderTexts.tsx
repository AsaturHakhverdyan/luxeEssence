import { useEffect, useState } from "react";
import axios from "axios";
import { HEADER_TEXTS } from "../../../../utils/constants/constants";
import { IHeaderTxts } from "../../../../utils/interface";

const useHeaderTexts = () => {
  const [headerTexts, setHeaderTexts] = useState<IHeaderTxts>();
  useEffect(() => {
    (async () => {
      const correctData = await axios.get(HEADER_TEXTS);
      if (correctData) {
        setHeaderTexts(correctData.data);
      }
    })();
  }, []);
  return {
    headerTexts,
  };
};

export default useHeaderTexts;
