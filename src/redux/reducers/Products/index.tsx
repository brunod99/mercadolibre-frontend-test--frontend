import {
  GET_PRODUCTS_CALL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_CALL,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  ProductsActionTypes,
  IInitialState,
} from "../../../types/Redux/Products";

// Initial state for products reducers
const initialState: IInitialState = {
  products: [],
  singleProduct: [],
  error: null,
  categories: [],
  loading: false,
};

export default function (state = initialState, action: ProductsActionTypes) {
  switch (action.type) {
    case GET_PRODUCTS_CALL:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: initialState.loading,
        error: action.payload,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...initialState,
        products: action.payload,
      };
    case GET_SINGLE_PRODUCT_CALL:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        loading: initialState.loading,
        error: action.payload,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...initialState,
        products: action.payload,
      };
    default:
      return state;
  }
}
