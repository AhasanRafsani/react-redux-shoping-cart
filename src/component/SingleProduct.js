import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getSingleProduct} from "../Redux/actions/productAction";
import {addToCart} from "../Redux/actions/cartAction";
import {useParams} from "react-router-dom";
import {Grid,Paper,Avatar,Typography,Box, Button,Container} from "@mui/material";
import { makeStyles } from "@mui/material";
import Loading from "./Loading"

const SingleProduct = ()=>{
   const {id} = useParams();
   const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getSingleProduct(id));
    },[])
   
   const {isLoading,product,error} = useSelector((state)=>state.product.getSingleProductReducer);
   console.log(product);
    
   const addToCartHandler = ()=>{
      dispatch(addToCart(product.id));
   }

return(
   <>

   { isLoading ? <Loading/> :

      <Container maxWidth="md">
        <Paper sx={{minHeight:"450px", margin:"100px auto",backgroundColor:"rgb(245,245,245)"}}>
          <Grid container spacing={2}>
             <Grid item xs={12} sm={5}>
                <Avatar  variant="square" alt="image" src={product.image} sx={{height:"400px", width:"90%", margin:"5px 0px 0px 20px"}} />
             </Grid>
              
             <Grid item xs={12} sm={6} sx={{margin:"10px"}}>
                 <Typography variant="h5" >{product.title}</Typography>
                 <Typography color="secondary" variant="h6">$ {product.price}</Typography>
                 
                 <Box sx={{marginTop:"20px"}}>
                   <Typography  variant="body1">{product.description}</Typography>
                 </Box>
                 
                 <Button onClick={addToCartHandler} variant="contained" sx={{margin:"30px 0px"}}>ADD TO CART</Button>
             </Grid> 
          </Grid>
        </Paper>
      </Container> 

      } 
    </>
)
}

export default SingleProduct;