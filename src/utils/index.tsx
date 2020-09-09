// Encode passed as argument query
export const encodeQuery = (str: string) => encodeURIComponent(str);

// Get param passed as argument value from url
export const getUrlParams = (param: string): string | null =>
  new URLSearchParams(window.location.search).get(param);

// Check if object has keys
export const checkObjectHasKeys = (object: {}, amount: number): boolean =>
  Object.keys(object).length > amount;

// Detect if we need to fetch data from product single or from products
export const detectDataFrom = (
  conditionProductSingle: string | null,
  conditionProducts: string | null
): "products" | "product-single" | undefined => {
  if (conditionProductSingle) {
    return "product-single";
  } else {
    if (conditionProducts) {
      return "products";
    }
  }
};

// Get string desired part from URL path
export const getStringFromUrlPath = (toRemove: string) =>
  window.location.pathname.split(toRemove)[1];
