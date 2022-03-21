import React from "react";
import { Header, Footer } from "components";
import Home from "./pages/landing-page/Landing-page";
import Products from "./pages/product-page/Products";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Wishlist from "./pages/wishlist-page/Wishlist";
import Cart from "./pages/cart-page/Cart";
import { Route, Routes } from "react-router-dom";

const App = () => {
 return  (
   <>
    <Header/>     
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/Products" element={<Products/>} />  
         <Route path="/Login" element={<Login/>} />  
         <Route path="/Signup" element={<Signup/>} />  
         <Route path="/Signup" element={<Signup/>} />  
         <Route path="/Wishlist" element={<Wishlist/>} />  
         <Route path="/Cart" element={<Cart/>} />  
      </Routes>
      <Footer/>
   </>
 );
}
export default App;