import React from "react";
import {Card,CardMedia,CardActions,CardContent,Typography,Button,Box} from "@mui/material";
import {useHistory} from "react-router-dom";

const Product = ({id,img,title,price})=>{
  
   const history = useHistory()

   const showDetails = (id)=>{
      history.push(`/singleProduct/${id}`);
   }
return(
    <>
      <Card  sx={{margin:"10px"}}>
           <Box sx={{height:"320px"}}>
               <CardMedia
                  component="img"
                  alt="Product"
                  image={img}
                  sx={{height:"160px",width:"auto",margin:"2px auto"}}
                  
               />

               <CardContent>
                  <Box sx={{marginBottom:"5px"}}>
                     <Typography variant="subtitle1">{title}</Typography>
                  </Box>
                  <Typography color="secondary" variant="h6">$ {price}</Typography>
               </CardContent>
          </Box>
            
             <CardActions>
                 <Button size="small" variant="contained" onClick={()=>showDetails(id)} sx={{margin:"1px auto"}}>Show Details</Button>
             </CardActions>

      </Card>
    </>
)
}

export default Product;