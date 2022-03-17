import {ADD_TO_CART_REQUEST,
       REMOVE_TO_CART_REQUEST,
       PRODUCT_QTY_REQUEST, 
       PROCESS_DONE_REQUEST} from "../constants/cartConstant";
import {combineReducers} from "redux"
const cartState = {
    cartItems:[]
}
const cartReducer = (state=cartState , action) =>{

    switch (action.type){

        case ADD_TO_CART_REQUEST:
            const reqProduct = action.payload;
            const adjReqProduct = {...reqProduct , qty:1 ,totalPrice:(reqProduct.qty * reqProduct.price)}
            const existItem = state.cartItems.find((p)=> p.id === adjReqProduct.id);
            if(existItem){
                 return {
                    cartItems:state.cartItems.map((p)=> p.id === existItem.id ? existItem : p )
                 }
            }
            else{
                 return{
                    cartItems:[...state.cartItems,adjReqProduct]
                 }
            }
        case REMOVE_TO_CART_REQUEST:
               const removeId = action.payload;
               return {
                  cartItems:state.cartItems.filter((p)=>p.id !== removeId ) 
               }
        case PRODUCT_QTY_REQUEST:
                 const pId=action.payload.id;
                 const findProduct = state.cartItems.find((p)=> p.id === pId);
                 const price = Math.round(action.payload.qty * findProduct.price);
                 const adjProduct = {...findProduct, qty:action.payload.qty , totalPrice:price}
               return {
                  cartItems:state.cartItems.map((p)=> p.id === adjProduct.id ? adjProduct : p )
               }
        case PROCESS_DONE_REQUEST:  
               return{
                    cartItems:[]
               }
        default:
              return state;
    }
}

const allCartReducer = combineReducers({
    cartReducer 
})

export default allCartReducer;