import React,{useEffect, useState} from "react";
import {Box,Grid,Avatar,Typography,Paper,IconButton,Button} from "@mui/material";
import {productQuantity,removeToCart} from "../Redux/actions/cartAction";
import { useDispatch } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({id,img,title,category,price,qty})=>{

    const dispatch = useDispatch();
    
    const [ productQty, setProductQty ] = useState(1);

    const quantityIncrement = ()=>{
        setProductQty((pre)=>pre+1)
    }

    const quantityDecrement = ()=>{
        setProductQty((pre)=>{
            if (pre == 1 ){
                return pre;
             }
                return pre-1;
            
        })
    }

    useEffect(()=>{
        dispatch(productQuantity(id,productQty)) ;
    },[productQty]);

    const removeItemHandler = ()=>{
        alert("Want to Remove This Product...??");
        dispatch(removeToCart(id));
       
 }
  
return(
    <>    
          <Paper sx={{margin:"0px 10px 10px 0px"}}>
             <Grid container justifyContent="center" item sx={{ minHeight:"170px", boxSizing:"border-box"}}>
               
                   <Grid item xs={4} md={3} sx={{height:"170px", margin:"10px" }}>
                      <Avatar variant="square" sx={{height:"100%" ,width:"100%"}}  alt="product" src={img} />
                   </Grid>
                     
                   <Grid item xs={7} md={7}>
                       <Box sx={{marginTop:"10px"}}>
                          <Typography variant="body1">{title}</Typography>
                          <Typography color="blue" variant="body2">Category : {category}</Typography>
                     
                          <Typography color="red" variant="h6">$ {price}</Typography>
                       </Box>

                        <Box sx={{marginTop:"10px"}}>

                           <Grid container>
                               <Grid item>
                                   <IconButton onClick={quantityIncrement} variant="outlined"><AddIcon/></IconButton>
                               </Grid>
                               <Grid item>
                                   <Box sx={{height:"30px",width:"50px",border:"2px solid black",margin:"5px 5px 10px 5px",borderRadius:"10px",paddingLeft:"15px"}}>
                                     {qty}
                                   </Box>
                               </Grid>
                               <Grid item>
                                  <IconButton onClick={quantityDecrement} variant="outlined"><RemoveIcon/></IconButton>
                               </Grid>
                                <Grid item sx={{margin:"5px 10px 10px 15px"}}>
                                   <Button  color="secondary" size="small" variant="contained" onClick={removeItemHandler} endIcon={<DeleteIcon/>}>Remove To Cart</Button>
                               </Grid>
                           </Grid>
                        </Box>    
                  </Grid>
                    
             </Grid> 
         </Paper>
         
    </>
)
}

export default Cart;

