import {useState} from "react";
import "../App.css" 
export const Contador = () => {
  const [counter, setCounter] = useState(1);

    return (
      <div className="app app-expand-lg">
        <div className="container-fluid">
         <div class="count">
          <h3>Count:</h3>
          <h1>{counter}</h1>
        </div>
        <div class="buttons">
          <button disabled={counter>=5}onClick={()=>{setCounter(counter + 1)}}>+</button>
          <button disabled={counter<=1}onClick={()=>{setCounter(counter - 1)}}>-</button>
        </div>
      </div>
    </div>
  );
}