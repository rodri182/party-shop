import React from "react";
import {Navbar} from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemListContainer from './conteiner/ItemListContainer';
const App = () => {
  return (
   <>
    <Router>
    <Navbar/>
    </Router>
    <ItemListContainer/>
   </>
  );
}

export default App;
