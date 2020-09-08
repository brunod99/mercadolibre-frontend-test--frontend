import {
  GET_PRODUCTS_CALL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_CALL,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  IGetProductsCall,
  IGetProductsCallSuccess,
  IGetProductsCallError,
  IGetSingleProductsCall,
  IGetSingleProductCallSuccess,
  IGetSingleProductCallError,
  ILoadingState,
  IErrorState,
  ProductsActionTypes,
} from "../../../types/Redux/Products";
import axiosClient from "../../../config/axios";
import { IProduct } from "../../../types/Components/Products";

export function getProductsActions(query: string | null) {
  return async (dispatch: (arg0: ProductsActionTypes) => void) => {
    dispatch(getProductsCall(true));

    try {
      const response = await axiosClient.get(`/items/?q=${query}`);
      console.log({ response });

      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(getProductsError(true));
    }
  };
}

// ---------------------- Products ----------------------- //
const getProductsCall = (loading: ILoadingState): IGetProductsCall => ({
  type: GET_PRODUCTS_CALL,
  payload: loading,
});

const getProductsSuccess = (products: IProduct[]): IGetProductsCallSuccess => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = (error: IErrorState): IGetProductsCallError => ({
  type: GET_PRODUCTS_ERROR,
  payload: error,
});

// ---------------------- Single Products ----------------------- //
export function getSingleProductActions(id: string) {
  return async (dispatch: (arg0: ProductsActionTypes) => void) => {
    dispatch(getSingleProductCall(true));

    try {
      const response = await axiosClient.get(`/items/${id}`);
      dispatch(getSingleProductSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(getSingleProductError(true));
    }
  };
}

const getSingleProductCall = (
  loading: ILoadingState
): IGetSingleProductsCall => ({
  type: GET_SINGLE_PRODUCT_CALL,
  payload: loading,
});

const getSingleProductSuccess = (
  singleProduct: IProduct
): IGetSingleProductCallSuccess => ({
  type: GET_SINGLE_PRODUCT_SUCCESS,
  payload: singleProduct,
});

const getSingleProductError = (
  error: IErrorState
): IGetSingleProductCallError => ({
  type: GET_SINGLE_PRODUCT_ERROR,
  payload: error,
});
