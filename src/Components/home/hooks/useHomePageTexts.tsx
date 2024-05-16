import { useEffect, useState } from "react";
import axios from "axios";
import { IHomePageTexts } from "../../../utils/interface";

const useHomePageTexts = () => {

  const [homePageTexts, setHomePageTexts] = useState<IHomePageTexts>();

  useEffect(() => {
    (async () => {
      const correctData = await axios.get(`https://tiknikstyle.10web.site/wp-json/shop_page/texts`);
      if (correctData) {
        setHomePageTexts(correctData.data)
      }
    })();
  }, []);

  return {
    homePageTexts,
  };
};

export default useHomePageTexts;
