import {useState} from "react";
import React from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [numero, setNumero] = useState(0);


  const incrementar = () => {
      if (numero < stock) {
          setNumero(numero + 1);
      }

  };


  const decrementar = () => {
      if (numero === 0) return;
      setNumero(numero - 1);
  };
  


  return (
      <div className='posicion'>
          <div className='posicion'>
              <button onClick= {incrementar} className="">+</button>
              <span>{numero}</span>
              <button onClick= {decrementar} className="">-</button>
          </div>
          {
              stock && numero
              ? <button  onClick={() => onAdd(numero)}>Agregar al carrito</button>
              : <button disabled>Agregar al carrito</button>
          }
      </div>
  );
};


export default ItemCount;