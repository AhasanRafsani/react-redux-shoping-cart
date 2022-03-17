
import React from "react"
import {useSelector,useDispatch } from "react-redux";
import { processDone } from "../Redux/actions/cartAction";
import {Container,Button} from "@mui/material"



const CheckOutPage=()=>{
  
    const dispatch = useDispatch();
    const {cartItems} = useSelector((state)=>state.cart.cartReducer); 
    const processDoneHandlar = ()=>{
        dispatch(processDone());
    }

   return(

    <>
      <Container maxWidth="lg">
        <pre>
            {
                JSON.stringify(cartItems,null,2)
            }
        </pre>
          <Button color="primary" variant="contained" size="medium" sx={{margin:"20px"}} onClick={processDoneHandlar} >Process Done</Button>
      </Container>
    </>

  )
}

export default CheckOutPage;