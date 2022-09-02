import React from "react";
import {Navbar} from "./components/Navbar";
import  {ItemListContainer} from "./components/ItemListContainer";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
   <>
    <Router>
     <Navbar/>
    <ItemListContainer greeting="hola mundo probando props"/>
    </Router>
    
   </>
  );
}

export default App;
