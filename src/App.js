import React from "react";
import {Navbar} from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Contador} from "./components/ItemCount";
import Videos from './conteiner/Videos';
const App = () => {
  return (
   <>
    <Router>
    <Navbar/>
   
    </Router>
    <Videos/>
   </>
  );
}

export default App;
