import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Header from "./component/Header";
const Home = lazy(()=>import("./component/Home"));
const Carts = lazy(()=>import("./component/Carts"));
const SingleProduct = lazy(()=>import("./component/SingleProduct"));
const CheckOut = lazy(()=>import("./component/CheckOut"));

function App(){
  return (
    <>
       <Suspense fallback={<h2>Loading...</h2>}>
             <BrowserRouter>
                 <Header/>
                 <div style={{marginTop:"60px"}}>
                 <Switch>
                     <Route exact path="/" component={Home}/>
                     <Route path="/singleProduct/:id" component={SingleProduct}/>
                     <Route path="/Cart" component={Carts}/>
                     <Route path="/checkOut" component={CheckOut}/>
                 </Switch>
                 </div>
            </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App;
