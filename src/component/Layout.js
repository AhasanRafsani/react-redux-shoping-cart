import React from "react";
import Header from "./Header";
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({

   root:{
       margin:"0px",
       padding:"0px",
       boxSizing:"border-box",
       backgroundColor:"rgb(245,245,245)",
       minHeight:"100vh",
       width:"100%"
   }
});

const Layout = ({children})=>{

  const classes = useStyles();
  
return(
    <div className={classes.root}>
  
        <Header/>
        {children}
        
    </div>
)
}

export default Layout;