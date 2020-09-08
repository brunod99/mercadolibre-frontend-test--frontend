import { createSelector } from "reselect";
import { IProduct } from "../../types/Components/Products";

const getProducts = (products: Array<IProduct>): Array<IProduct> => products;

export const getProductsSelector = createSelector(
  [getProducts],
  (products) => products
);
