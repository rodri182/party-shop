import {useState} from "react";
 


export const Contador = ({stock, initial}) => {
  const [counter, setCounter] = useState(1);

    return (
      <div className="app app-expand-lg">
        <div className="container-fluid">
         <div class="count">
          <h3>Count:</h3>
          <h1>{counter}</h1>
        </div>
        <div class="buttons">
          <button disabled={counter>=stock}onClick={()=>{setCounter(counter + 1)}}>+</button>
          <button disabled={counter<=initial}onClick={()=>{setCounter(counter - 1)}}>-</button>
        </div>
      </div>
    </div>
  );
}