
import {combineReducers} from "redux";
import {
    GET_ALL_PRODUCT_REQUEST,
    GET_ALL_PRODUCT_REQUEST_SUCESS,
    GET_ALL_PRODUCT_REQUEST_FAILURE,

    GET_SINGLE_PRODUCT_REQUEST,
    GET_SINGLE_PRODUCT_REQUEST_SUCESS,
    GET_SINGLE_PRODUCT_REQUEST_FAILURE } from "../constants/productConstant";
 
const getAllProductState = {
    isLoading:false,
    products:[],
    error:""
}  

const getAllProductReducer = (state=getAllProductState,action)=>{
    switch (action.type) {
        case GET_ALL_PRODUCT_REQUEST :
           return {
               ...state,
               isLoading:true
           };
        case GET_ALL_PRODUCT_REQUEST_SUCESS:
           return {
                ...state,
                isLoading:false,
                products: action.payload
            };
        case GET_ALL_PRODUCT_REQUEST_FAILURE:
            return {
                ...state,
                isLoading:false,
                errpr: action.payload
             };    
        default:
            return state;
    }
}

const getSingleProductState = {
    isLoading:true,
    product:{},
    error:""
}
const getSingleProductReducer = (state=getSingleProductState,action)=>{
      switch (action.type) {
          case GET_SINGLE_PRODUCT_REQUEST:
             return {
                ...state,
                isLoading:true
              };
          case GET_SINGLE_PRODUCT_REQUEST_SUCESS :
                return {
                   ...state,
                   isLoading:false,
                   product:action.payload
                 };
          case GET_SINGLE_PRODUCT_REQUEST_FAILURE :
                    return {
                       ...state,
                       isLoading:false,
                       error:action.payload
                     };
              
      
          default:
              return state;
      }
}

const productReducer = combineReducers({
    getAllProductReducer,
    getSingleProductReducer
})

export default productReducer;