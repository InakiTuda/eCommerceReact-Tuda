import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./components/CartContext";
import Cart from "./components/Cart";
import Checkout from './components/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
        <div>      
          <BrowserRouter>
          <CartProvider>
            <NavBar/>
            <Routes>
              <Route path={"/"} exact element={<ItemListContainer/>}/>
              <Route path={"/categoria/:id"} exact element={<ItemListContainer/>}/>
              <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
              <Route path={"/Cart"} exact element={<Cart/>}/>
              <Route path={'/Checkout'} element={<Checkout/>}/>
            </Routes>
            <ToastContainer/>   
          </CartProvider>  
          </BrowserRouter>
        </div>
  );
}

export default App;
