import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOut";

function App(){
  return (
         <>
       
            <BrowserRouter>
                 <Switch>
                     <Route exact path="/" component={HomePage}/>
                     <Route path="/singleProduct/:id" component={SingleProductPage}/>
                     <Route path="/Cart" component={CartPage}/>
                     <Route path="/checkOut" component={CheckOutPage}/>
                 </Switch>
            </BrowserRouter>
     
        </>
      );
}

export default App;
