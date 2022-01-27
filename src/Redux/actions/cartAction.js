import {ADD_TO_CART_REQUEST,
        REMOVE_TO_CART_REQUEST,
        PRODUCT_QTY_REQUEST,
        PROCESS_DONE_REQUEST } from "../constants/cartConstant";
import axios from "axios";

export const addToCart = (id)=>{
    return async( dispatch, getState )=>{
        try{
           const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
           dispatch({type:"ADD_TO_CART_REQUEST", 
                     payload:data})
        }catch(err){
            console.log(err);
        }
        localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartReducer.cartItems))
    }
   
}

export const removeToCart = (id)=>{
    return (dispatch,getState)=>{
        dispatch({type:"REMOVE_TO_CART_REQUEST",
                   payload:id});
       localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartReducer.cartItems));
}

}

export const productQuantity = (id,qty)=>{
    return (dispatch)=>{
        dispatch({type:"PRODUCT_QTY_REQUEST",
                  payload: { id:id,
                             qty:qty 
                           }
                 });
    }
}

export const processDone = ()=>{
    return (dispatch)=>{
        dispatch({type:"PROCESS_DONE_REQUEST" });
    }
}