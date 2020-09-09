import {
  GET_PRODUCTS_CALL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_CALL,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  ProductsActionTypes,
  IInitialProductsState,
} from "../../../types/Redux/Products";

// Initial state for products reducers
const initialState: IInitialProductsState = {
  products: [],
  singleProduct: {},
  error: null,
  categories: [],
  loading: false,
};

export default function (state = initialState, action: ProductsActionTypes) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT_CALL:
    case GET_PRODUCTS_CALL:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_PRODUCT_ERROR:
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: initialState.loading,
        error: action.payload,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...initialState,
        products: action.payload.items,
        categories: action.payload.categories,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...initialState,
        singleProduct: action.payload,
      };
    default:
      return state;
  }
}
