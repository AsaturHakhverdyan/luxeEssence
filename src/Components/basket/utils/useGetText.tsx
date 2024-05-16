import { useEffect } from "react";
import { IBasketText } from "../../../utils/interface";
import axios from "axios";
import { BASE_URL } from "../../../utils/constants/constants";

const useGetText = (
  setStateText: React.Dispatch<React.SetStateAction<IBasketText | undefined>>,
  url: string
) => {
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${BASE_URL}${url}`);
      if (data) {
        setStateText(data);
      }
    })();
  }, [setStateText, url]);
};

export default useGetText;
