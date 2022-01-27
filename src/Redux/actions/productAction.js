
import axios from "axios";
import {
    GET_ALL_PRODUCT_REQUEST,
    GET_ALL_PRODUCT_REQUEST_SUCESS,
    GET_ALL_PRODUCT_REQUEST_FAILURE,

    GET_SINGLE_PRODUCT_REQUEST,
    GET_SINGLE_PRODUCT_REQUEST_SUCESS,
    GET_SINGLE_PRODUCT_REQUEST_FAILURE } from "../constants/productConstant";

export const getAllProduct = ()=>{
     return async(dispatch)=>{
           dispatch({type:GET_ALL_PRODUCT_REQUEST});

         try{

           const {data} = await axios.get("https://fakestoreapi.com/products");
           dispatch({type:GET_ALL_PRODUCT_REQUEST_SUCESS ,
                     payload:data });

         }catch(err){
            dispatch({type:GET_ALL_PRODUCT_REQUEST_FAILURE,
                payload:err.message});
         }

     }
 } 

  export const getSingleProduct = (id)=>{
      return async (dispatch)=>{
             dispatch({type:GET_SINGLE_PRODUCT_REQUEST})  
           try{
             const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
             dispatch({type:GET_SINGLE_PRODUCT_REQUEST_SUCESS,
                payload: data });

           }catch(err){
             dispatch({type:GET_SINGLE_PRODUCT_REQUEST_FAILURE ,
                payload: err.message});
           }
      }
  }
 
 
