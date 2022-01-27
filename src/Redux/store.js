import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import productReducer from "./reducers/productReducer";
import allCartReducer from "./reducers/cartReducer";

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const rootReducer = combineReducers ({
    product:productReducer,
    cart:allCartReducer
});
const initialState ={
    cart : {
        cartReducer : {
             cartItems:cartItemsFromStorage
        }
    }
};

const middleware = [thunk];

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;