import React from "react";
import {Navbar} from "./components/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/itemDetailConteiner";
import CartContextProvider from "./components/CartContext";
import Cart from "./components/Cart"

const App = () => {
  return (
   <>
   <CartContextProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path="/" element={<ItemListContainer/>}/>
     <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
     <Route path="/item/:idItem" element={<ItemDetailConteiner/>}/>
     <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
   </>
  );
}

export default App;
