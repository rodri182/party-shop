import React from "react";
import {Navbar} from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {
  return (
   <>
    <Router>
     <Navbar></Navbar>
    </Router>
   </>
  );
}

export default App;
