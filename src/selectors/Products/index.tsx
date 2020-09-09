import { createSelector } from "reselect";
import { CategoriesType } from "../../types/Components/Breadcrumb";
import { IProduct } from "../../types/Components/Products";

const getProducts = (products: Array<IProduct>): Array<IProduct> => products;

export const getProductsSelector = createSelector(
  [getProducts],
  (products) => products
);

const getCategories = (categories: CategoriesType): CategoriesType =>
  categories;

export const getCategoriesSelector = createSelector(
  [getCategories],
  (categories) => categories
);
