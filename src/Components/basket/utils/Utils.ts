const Utils = (price: string, count: number ) => {
   let newPrice = "";
    const arrayForPrice = ((+price / 100 ) * count).toString().split("");
    for (let i = 0; i < arrayForPrice.length; i++) {
      if(i !== 0 && i % 3 === arrayForPrice.length % 3) {
        newPrice += "." + arrayForPrice[i];
      }
      else{
        newPrice += arrayForPrice[i]
      }
    }
  return (
   newPrice
  )
};

export default Utils;
