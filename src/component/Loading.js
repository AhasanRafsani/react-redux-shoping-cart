import React from "react";
import {Box,CircularProgress,Typography} from "@mui/material"

const Loading = ()=>{
  
return(
    <>
     
      <Box sx={{height:"60px",width:"60px",margin:"100px auto"}}>
          <CircularProgress/>
          <Typography variant="body2">Loading...</Typography>
      </Box>
       
    </>
)
}

export default Loading;