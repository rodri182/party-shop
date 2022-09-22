import ItemDetail from "./ItemDetail";
import { useEffect, useState } from 'react';
import customFetch from "../utils/CustomFetch";
import { useParams } from "react-router-dom";
import productos from "../utils/productos";



const ItemDetailConteiner = () => {
 
    const[dato,setDato]= useState({});
    const{ idItem } = useParams();
    
    useEffect(() => {
        customFetch(1000, productos.find(item => item.id == idItem))
         .then(result=> setDato(result))
         .catch(err =>console.log(err))
       
    }, [idItem]);

    return (

        <ItemDetail item={dato} />
    );

}
export default ItemDetailConteiner;