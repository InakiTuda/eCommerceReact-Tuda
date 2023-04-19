import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./components/CartContext";
import Cart from "./components/Cart";

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
            </Routes>   
          </CartProvider>  
          </BrowserRouter>
        </div>
  );
}

export default App;
