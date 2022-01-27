import React,{useState,useEffect} from "react";
import Product from "./Product";
import {Grid,Container} from "@mui/material";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import {getAllProduct} from "../Redux/actions/productAction";
import Loading from "./Loading";
const Cart = ()=>{
    const dispatch = useDispatch();

     useEffect(()=>{
         dispatch(getAllProduct());
     },[])

    const {isLoading,products,error} = useSelector((state)=>state.product.getAllProductReducer) 

return(
  <>
    
       <Container maxWidth="lg">
         { isLoading ? <Loading/> :
            <Grid container>
              {
                 products.map((p,index)=>(

                    <Grid item xs={12} sm={4} md={3} key={index}>
                       <Product id={p.id} img={p.image}  title={p.title} price={p.price} />  
                    </Grid>
                ))
              }  
            </Grid>
          }
        </Container>  
      
    </>
)
}

export default Cart;
