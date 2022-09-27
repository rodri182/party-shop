import React from 'react'
import { useState } from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const Item = ({id, producto, titulo, colores, cant, description, start, precio}) => {
    const ctx= useContext(CartContext);
    return (
    <>
     
        <div className="video-container">
            <div className="video-image">
            <img className="imagen" src={producto} alt="Same alt value" />
            </div>
            <div className="video-info">
            <h3>{titulo}</h3>
             <p>Cantidad: {cant}</p>
             <p>Precio: ${precio}</p>
            <p>{description}</p>
            <button onClick={()=>ctx.removeItem(id)}>cancelar</button>
            </div>
            
        </div>
        </>
    );
  
}
export default Item;