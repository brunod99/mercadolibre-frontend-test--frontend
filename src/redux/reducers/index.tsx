import { combineReducers } from 'redux';
import ProductsReducer from './Products';

export default combineReducers({
    products: ProductsReducer
});