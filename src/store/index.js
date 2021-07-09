import {createStore, combineReducers}  from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';
import ProductReducer from './reducer/ProductReducer'
import CartReducer from './reducer/cardReducer/CartReducer';

const root = combineReducers({
    ProductReducer,
    CartReducer
});

const store = createStore(root, devToolsEnhancer());

export default store