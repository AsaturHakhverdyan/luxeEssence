export const BASE_URL = "https://tiknikstyle.10web.site/wp-json";
export const CONSUMER_KEY = process.env.REACT_APP_CONSUMER_KEY as string;

export const LOGIN_URL = "/jwt-auth/v1/token";
export const WC_V3 = "wc/v3";
export const SEND_CHECKOUT = "/wc/v3/orders?";
export const BASE_PRODUCT = "wholesale/products?filter[pa_market]=446";
export const PRODUCTS = "products";
export const FOOTER_CALL = `footer/texts`;
export const HOME_PAGE_TEXTS = `shop_page/texts`;
export const SINGLE_PRODUCT_TEXTS = `single_product/texts`;
export const HEADER_TEXTS = `header/texts`;
export const BASKET_TEXTS = `${process.env.REACT_APP_BASE_URL}/cart_page/texts`;
export const GET_CATEGORIES = `${process.env.REACT_APP_BASE_URL}/product/categories`;

export const PAGES = {
  HOME: "/home",
  LOGIN: "/login",
  EMAIL_PASS: "/emailPass",
  UPDATE_PASS: "/updatePassword",
  PRODUCT: "/product",
  PRODUCT_ID: "/product/:id",
  BASKET: "/basket",
  CHECKOUT: "/checkout",
};

export const KEYS = {
  consumerKey: "ck_7c96e5a4137c67d306d836b73db359f3d02aa556",
  consumerSecret: "cs_b44007a156fdee337ff33c8977ae30bf12b72861"
}


export const SINGLE_PRODUCT_TYPES = {
  VARIABLE: "variable",
  OUT_OFF_STOCK: "outofstock",
  IN_STOCK: "instock",
};

export const SWIPER_SIMILAR_CONFIG = {
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 20,
  pagination: {
    clickable: true,
    bulletClass: `swiper-pagination-bullet`,
  },
};

export const SWIPER_SINGLE_CONFIG = {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: false,
  pagination: {
    clickable: true,
  },
  navigation: true,
  className: "mySwiper",
};

export const LOCAL_STORAGE_KEYS = {
  JWT_TOKEN: "jwt_token",
  USERNAME: "username",
  NONCE: "Nonce",
};

export const UNMOUNT_TIMEOUT_VALUE = 700;

export const ERROR_MASSEGE = {
  ThisItemIsAreadyInCart:
    "This item is already in the cart and its quantity cannot be edited",
  NoMatchingVariation: "No matching variation found.",
  wentWrong: "Something went wrong"
};

export const QUERY_PARAMS = {
  ORDER_BY: "orderby",
  DEFAULT_ORDER_BY: "by-a-z",
  CATEGORY: "category",
  FRAMES: "frames",
};
