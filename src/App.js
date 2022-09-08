import React from "react";
import {Navbar} from "./components/Navbar";
import  {ItemListContainer} from "./components/ItemListContainer";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Contador} from "./components/ItemCount";
const App = () => {
  return (
   <>
    <Router>
    <Navbar/>
    <ItemListContainer greeting="hola mundo probando props"/>
    <Contador/>
    </Router>
    
   </>
  );
}

export default App;
