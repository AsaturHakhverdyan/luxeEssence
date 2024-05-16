import { useEffect, useState } from "react";
import axios from "axios";
import { ISinglePageTexts } from "../../../../utils/interface";

const useSIngleProductTexts = () => {
  const [singleProductTexts, setsingleProductTexts] = useState<
    ISinglePageTexts | undefined
  >();

  useEffect(() => {
    (async () => {
      const correctTexts = await axios.get("https://tiknikstyle.10web.site/wp-json/single_product/texts");
      if (correctTexts) {
        setsingleProductTexts(correctTexts.data);
      }
    })();
  }, []);

  return {
    singleProductTexts,
  };
};

export default useSIngleProductTexts;
