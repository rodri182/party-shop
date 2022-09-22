import React from 'react'
import { useState } from 'react';
import "../App.css";
import { Link } from "react-router-dom";


const Item = ({id, producto, titulo, colores, cant, description, start, precio}) => {
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
             <p>Cantidad: {cant}</p>
             <p>Precio: ${precio}</p>
             <button disabled={rate>=cant} onClick={handleClick}>comprar</button> {rate}
            <p>{description}</p>
            <Link to={`/item/${id}`}>Detalles</Link>
            </div>
        </div>
        </>
    );
  
}
export default Item;