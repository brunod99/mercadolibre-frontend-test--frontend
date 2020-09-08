import { IProductsListItem, IProductDetail } from "../../Components/Products";
import { IBreadCrumb } from "../../Components/Breadcrumb";

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
  payload: IProductsListItem;
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
  payload: IProductDetail;
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
export interface IInitialState {
  products: IProductsListItem | [];
  singleProduct: IProductDetail | [];
  categories: IBreadCrumb | [];
  loading: ILoadingState;
  error: IErrorState;
}
