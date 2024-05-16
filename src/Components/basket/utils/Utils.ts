import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../../../utils/constants/constants";

const Utils = (price: string, count: number) => {
  let newPrice = "";
  const arrayForPrice = ((+price / 100) * count).toString().split("");
  for (let i = 0; i < arrayForPrice.length; i++) {
    if (i !== 0 && i % 3 === arrayForPrice.length % 3) {
      newPrice += "." + arrayForPrice[i];
    }
    else {
      newPrice += arrayForPrice[i]
    }
  }
  return (
    newPrice
  )
};

export default Utils;



export async function getNonce() {
  const cookie = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN) || "");
  const { data } = await axios.get(
    `https://hydralab-dev.10web.site/wp-json/nonce/header?cookie=${cookie}`
  );
  if (data) {
    return data.nonce[0];
  }
}
