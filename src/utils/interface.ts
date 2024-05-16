export interface IOptionsAttributes {
  name: string;
  stock_quantity: number;
  variation_id: number;
  taxonomy: string;
}

///////////////////////////////////
export interface ISingleProductAttributes {
  name: string;
  taxonomy: string;
  types: {
    name: string;
    options: IOptionsAttributes[];
  }[];
}
//////////////////////////////////

export interface ISingleProducts {
  id: number;
  name: string;
  sku: string;
  images: {
    src: string;
  }[];
  regular_price_string?: string;
  regular_price: string;
  sale_price_string?: string;
  sale_price: string;
  price_string: string;
  stock_status: string;
  quantity: number;
  stock_quantity: number;
  description?: string | undefined;
  short_description?: string | undefined;
  type: string;
  variation_attributes?: ISingleProductAttributes[];
}

//////////////////////////////

export interface IProducts {
  id: number;
  name: string;
  sku: string;
  image_url: string[];
  regular_price_string: string;
  sale_price_string: string;
  stock_status: string;
  notAvailable: string | undefined;
  currencyName?: string | undefined;
}

//////////////////////////////
export interface IAttributeCategory {
  term_id: number;
  name: string;
  taxonomy: string;
  description: string;
}

export interface IAttributes {
  name: string;
  name_category: IAttributeCategory[];
}

//////////////////////////////

export interface ICatchError {
  data: {
    message: string;
  };
}

////////////////////////////////

export interface IFooterTexts {
  contact: {
    address: {
      icon: IGetTexts;
      text: IGetTexts;
    };
    phone: {
      icon: IGetTexts;
      phone1: IGetTexts;
      phone2: IGetTexts;
    };
    workhours: {
      icon: IGetTexts;
      workhours1: IGetTexts;
      workhours2: IGetTexts;
    };
  };
  copyright: IGetTexts;
}

////////////////////////////////

interface HeaderTextItem {
  description: string;
}

export interface IHeaderTxts {
  toLogOut: HeaderTextItem;
  logo: HeaderTextItem;
  searchProduct: HeaderTextItem;
  searchNoProduct: HeaderTextItem;
  searchIcon: HeaderTextItem;
  globusIcon: HeaderTextItem;
  cartIcon: HeaderTextItem;
  currency?: HeaderTextItem;
}

////////////////////////////////

export interface IGetTexts {
  description: string;
  slug: string;
}

////////////////////////////////

export interface IHomePageTexts {
  filter: {
    title: IGetTexts;
    filterIcon: IGetTexts;
    noProduct: IGetTexts;
    price: IGetTexts;
    clear: IGetTexts;
  };
  sort: {
    title: IGetTexts;
    sortBy: {
      byAZ: IGetTexts;
      byZA: IGetTexts;
      byDate: IGetTexts;
      priceToHigh: IGetTexts;
      priceToLow: IGetTexts;
      bySaledCollection: IGetTexts;
    };
  };
  product: {
    addtocart: IGetTexts;
    notInStock: IGetTexts;
    inStock: IGetTexts;
  };
}

//////////////////////////

export interface ISinglePageTexts {
  goHome: IGetTexts;
  toChoose: IGetTexts;
  alreadyInTheCart: IGetTexts;
  oneItemPrice: IGetTexts;
  oneItemPriceIcon: IGetTexts;
  currency: IGetTexts;
  count: IGetTexts;
  toShare: IGetTexts;
  notInStock: IGetTexts;
  relatedProducts: IGetTexts;
  facebookIcon: IGetTexts;
  instagramIcon: IGetTexts;
  linkedinIcon: IGetTexts;
  cartIcon: IGetTexts;
  addToCart: IGetTexts;
  fillAllFields: IGetTexts;
  description: IGetTexts;
  advantage: IGetTexts;
}

///////////////////////

export interface IBasketProduct {
  id: number;
  name: string;
  sku: string;
  key: string | number;
  itemKey: string | number;
  images: {
    id: number;
    src: string;
  }[];
  quantity: number;
  count: string | undefined;
  prices: {
    currency_code: string;
    regular_price: string;
    sale_price: string;
  };
  variation?: {
    attribute: string;
    value: string;
  }[];
  checkoutBasket: IBasketProduct[];
}

//////////////////////

export interface IBasketText {
  basket: IGetTexts;
  quantity: IGetTexts;
  "z-basket-is-empty": IGetTexts;
  "mark-all": IGetTexts;
  "z-clear-basket": IGetTexts;
  "z-full-products-price": IGetTexts;
  "z-to-buy": IGetTexts;
}

/////////////////////////

export interface ICheckOutText {
  backto: IGetTexts;
  email: IGetTexts;
  address: IGetTexts;
  logo: IGetTexts;
  name: IGetTexts;
  phone: IGetTexts;
  sale: IGetTexts;
  total: IGetTexts;
  "order-price": IGetTexts;
  "delivery-price": IGetTexts;
  "last-name": IGetTexts;
  "company": IGetTexts;
  "press-company-name": IGetTexts;
  "press-your-last-name": IGetTexts;
  "name-placeholder": IGetTexts;
  "address-region": IGetTexts;
  "confirm-order": IGetTexts;
  "delivery-address": IGetTexts;
  "delivery-data": IGetTexts;
  "email-placeholder": IGetTexts;
  "fill-all-fields": IGetTexts;
  "required-red-icon": IGetTexts;
  "phone-placeholder": IGetTexts;
  "postal-code": IGetTexts;
  "your-order": IGetTexts;
  "quantity": IGetTexts;
  "delivery-frames": IGetTexts;
  "delivery-lenses": IGetTexts;
}

/////////////////////////

export interface IVariationAttributes {
  attribute: string;
  value: string;
}

//////////////////////////

export interface IProductIds {
  product_id: number;
  quantity: number;
  total: string;
}

//////////////////////////

export interface ICategories {
  name: string;
  slug: string;
}
