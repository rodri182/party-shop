import React from 'react'
import { useState } from 'react';
import "../App.css";

const Item = ({producto, titulo, colores, cant, description, start}) => {
    const [rate, setRate] = useState(start);  
    
    
    const handleClick = () => {
        setRate(rate+1);
    }

    return (
    <>
     
        <div className="video-container">
            <div className="video-image">
            <img className="imagen" src={producto} alt="Same alt value" />
            </div>
            <div className="video-info">
            <h3>{titulo}</h3>
            <h4>Colores: {colores}</h4> 
             <p>Cantidad: {cant}</p>
             <button disabled={rate>=cant} onClick={handleClick}>comprar</button> {rate}
            <p>{description}</p>
            </div>
        </div>
        </>
    );
  
}
export default Item;