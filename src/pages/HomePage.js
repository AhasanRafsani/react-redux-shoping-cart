import React,{useEffect,useState} from "react";
import Layout from "../component/Layout";
import Product from "../component/Product";
import {Grid,Container,Pagination} from "@mui/material";
import {useDispatch,useSelector} from "react-redux";
import {getAllProduct} from "../Redux/actions/productAction";
import Loading from "../component/Loading";
const HomePage = ()=>{
   
    const dispatch = useDispatch();
    const [currentPage,setCurrentPage]=useState(1);
    const rowPerPage = 10;
    const initData = (currentPage - 1) * rowPerPage;
    const lastData = (currentPage - 1) * rowPerPage + rowPerPage ;

    const  handleChangePage =(e, page)=>{
      setCurrentPage(page);
    }
    useEffect(()=>{
        dispatch(getAllProduct());
    },[])
    
    const {isLoading,products,error} = useSelector((state)=>state.product.getAllProductReducer) 
return(
    <>
      <Layout>
          <Container maxWidth="lg" sx={{marginTop:"10px"}} >
            { isLoading ? <Loading/> :

            <div>
               <Grid container justifyContent="center">
               {
                    products.slice( initData,lastData ).map((p,index)=>(

                      <Grid item xs={10} sm={4} md={3} key={index}>
                         <Product id={p.id} img={p.image}  title={p.title} price={p.price}/>  
                      </Grid>
                ))
               }  
              </Grid>

              <Pagination
                count={products.length/rowPerPage}
                page={currentPage}
                variant="outlined"
                color="secondary"
                onChange={handleChangePage}
                sx={{margin:"10px"}}
              />
            </div>
            }
            
          </Container> 
      </Layout> 
    </>
)
}

export default HomePage;