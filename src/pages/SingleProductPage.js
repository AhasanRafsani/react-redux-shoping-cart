import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getSingleProduct} from "../Redux/actions/productAction";
import {addToCart} from "../Redux/actions/cartAction";
import {useParams} from "react-router-dom";
import {Grid,Paper,Avatar,Typography,Box, Button,Container} from "@mui/material";
import Loading from "../component/Loading";
import Layout from "../component/Layout";

const SingleProductPage = ()=>{
    
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
    <Layout>

      <Container maxWidth="md">

        <Paper>
           <Grid container justifyContent="center" spacing={1} sx={{minHeight:"450px",margin:"20px 0px"}}>
               <Grid item xs={10} sm={5} sx={{height:"380px",marginTop:"10px"}}>
                  <Avatar  variant="square" alt="image" src={product.image} sx={{height:"100%", width:"100%"}} />
                </Grid>
              
               <Grid item xs={10} sm={5} sx={{margin:"10px"}}>
                    <Typography variant="h5" >{product.title}</Typography>
                    <Typography color="secondary" variant="h6">$ {product.price}</Typography>
                 
                    <Box sx={{marginTop:"20px"}}>
                        <Typography  variant="body1">{product.description}</Typography>
                    </Box>
                 
                    <Button onClick={addToCartHandler} variant="contained" sx={{margin:"20px 0px"}}>ADD TO CART</Button>
               </Grid> 
            </Grid>
         </Paper>
      </Container> 

   </Layout>
   } 
 </>
)
}

export default SingleProductPage;