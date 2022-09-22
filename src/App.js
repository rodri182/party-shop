import React from "react";
import {Navbar} from "./components/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/itemDetailConteiner";

const App = () => {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path="/" element={<ItemListContainer/>}/>
     <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
     <Route path="/item/:idItem" element={<ItemDetailConteiner/>}/>
     
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
