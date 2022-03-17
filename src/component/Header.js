import React from "react";
import {AppBar,Toolbar,Box,Typography,Badge,IconButton,Button} from "@mui/material";
import {makeStyles} from '@material-ui/styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';


const useStyle = makeStyles({
  
    appBar:{
        display:"flex",
        height:"55px"
    },
    toolbar:{
        marginTop:"4px",
      },

})

const Header = ()=>{
   const classes = useStyle();
   const history = useHistory(); 
   const {cartItems} = useSelector((state)=>state.cart.cartReducer);
   
   const cartHandler = ()=>{
         history.push("/Cart");
   }
   const backToHome = ()=>{
        history.push("/"); 
   }

return(
    <>
      <AppBar position="static" className={classes.appBar}>
          <Toolbar variant="dense" className={classes.toolbar}>
              <Box sx={{flexGrow:1}}>
                  <Typography  variant="h5">Redux Shoping Cart</Typography>
              </Box>

              <Box>
                 <Button onClick={backToHome} size="medium" color="inherit" startIcon={<HomeIcon/>}>Home</Button>
              </Box>

              <IconButton size="medium" color="inherit" onClick={cartHandler} >
                 <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCartIcon/>
                 </Badge>
           
              </IconButton>
         
          </Toolbar>
      </AppBar>
    </>
)
}

export default Header ;
