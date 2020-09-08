import { createSelector } from "reselect";
import { IProduct } from "../../types/Components/Products";

const getProducts = (products: IProduct[]) => products;

export const getProductsSelector = createSelector(
  [getProducts],
  (products) => products
);
