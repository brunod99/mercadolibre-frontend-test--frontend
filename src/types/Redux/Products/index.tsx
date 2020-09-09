import { IProduct } from "../../Components/Products";
import { CategoriesType } from "../../Components/Breadcrumb";

export const GET_PRODUCTS_CALL = "GET_PRODUCTS_CALL";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
export const GET_SINGLE_PRODUCT_CALL = "GET_SINGLE_PRODUCT_CALL";
export const GET_SINGLE_PRODUCT_SUCCESS = "GET_SINGLE_PRODUCT_SUCCESS";
export const GET_SINGLE_PRODUCT_ERROR = "GET_SINGLE_PRODUCT_ERROR";

// Loading
export type ILoadingState = boolean;

// Error
export type IErrorState = boolean | null;

// Products
export interface IGetProductsCall {
  type: typeof GET_PRODUCTS_CALL;
  payload: ILoadingState;
}

export interface IGetProductsCallSuccess {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: { items: Array<IProduct>; categories: CategoriesType };
}

export interface IGetProductsCallError {
  type: typeof GET_PRODUCTS_ERROR;
  payload: IErrorState;
}

// Single Products
export interface IGetSingleProductsCall {
  type: typeof GET_SINGLE_PRODUCT_CALL;
  payload: ILoadingState;
}

export interface IGetSingleProductCallSuccess {
  type: typeof GET_SINGLE_PRODUCT_SUCCESS;
  payload: IProduct;
}

export interface IGetSingleProductCallError {
  type: typeof GET_SINGLE_PRODUCT_ERROR;
  payload: IErrorState;
}

export type ProductsActionTypes =
  | IGetProductsCall
  | IGetProductsCallSuccess
  | IGetProductsCallError
  | IGetSingleProductsCall
  | IGetSingleProductCallSuccess
  | IGetSingleProductCallError;

// Initial State
export interface IInitialProductsState {
  products: Array<IProduct> | [];
  singleProduct: Partial<IProduct>;
  categories: CategoriesType | [];
  loading: ILoadingState;
  error: IErrorState;
}
