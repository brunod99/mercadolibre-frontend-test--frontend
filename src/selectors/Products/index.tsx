import { createSelector } from "reselect";
import { CategoriesType } from "../../types/Components/Breadcrumb";
import { IProduct } from "../../types/Components/Products";

// Get products selector
const getProducts = (products: Array<IProduct>): Array<IProduct> => products;

export const getProductsSelector = createSelector(
  [getProducts],
  (products) => products
);

// Get categories selector
const getCategories = (categories: CategoriesType): CategoriesType =>
  categories;

export const getCategoriesSelector = createSelector(
  [getCategories],
  (categories) => categories
);

// Get single product selector
const getSingleProduct = (
  singleProduct: Partial<IProduct>
): Partial<IProduct> => singleProduct;

export const getSingleProductSelector = createSelector(
  [getSingleProduct],
  (singleProduct) => singleProduct
);
