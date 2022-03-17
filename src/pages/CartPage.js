import React from "react";
import {Grid,Paper,Container,Typography,Button} from "@mui/material"
import Cart from "../component/Cart";
import { useHistory } from "react-router-dom";
import {useSelector } from "react-redux";
import Layout from "../component/Layout";

const CartPage = ()=>{

   const history = useHistory ();
   const {cartItems} = useSelector((state)=>state.cart.cartReducer); 

   const totalPrice = cartItems.reduce((acc,item)=> {
                         return acc+item.totalPrice },0);
   console.log(totalPrice);

   const checkOut = ()=>{
        history.push("/checkOut") 
   }

return(
    <>
      <Layout>
         <Container maxWidth='lg' sx={{marginTop:"15px"}}>

            <Paper sx={{height:"50px" ,padding:"15px 0 0 20px" , backgroundColor:"rgb(245,255,250)"}}>
                <Typography  variant="h6">My Cart</Typography>
            </Paper>

           <Grid justifyContent="center" container sx={{marginTop:"20px"}}>

              <Grid container item  xs={10} sm={7} direction="column">
                 {
                    cartItems.map((p,index)=>
                      <Cart key={index} id={p.id} img={p.image} category={p.category} title={p.title} price={p.totalPrice} qty={p.qty}/>
                    )
                 }
              </Grid>
             
               <Grid item container xs={10} sm={4} direction="column" justifyContent="space-between">
                  <Paper sx={{minHeight:"150px",backgroundColor:"rgb(240,255,255)",marginBottom:"10px"}}> 
                        <Grid item sx={{height:"90px" , margin:"10px 0 0 40px"}}>
                           <Typography variant="h6">TATOL : {cartItems.length} (Items)</Typography>
                           <Typography color="secondary" variant="h6">$ {totalPrice}</Typography>
                        </Grid>
                        <Grid item sx={{margin:"10px 0 20px 40px"}}>
                           <Button color="secondary" variant="contained" onClick={checkOut}> Process To Check Out</Button>
                        </Grid>
                  </Paper>
              </Grid>

           </Grid>

         </Container>
     </Layout> 
    </>
  );
}

export default CartPage;