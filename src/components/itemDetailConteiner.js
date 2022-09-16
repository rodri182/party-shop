import ItemDetail from "../components/ItemDetail";
import { useEffect, useState } from 'react';
import customFetch from "../utils/CustomFetch";
const {productos} = require ("../utils/productos.js");



const ItemDetailConteiner = () => {
 
    const[dato,setDato]= useState({});
    
    useEffect(() => {
        customFetch(2000, productos[1])
         .then(result=> setDato(result))
         .catch(err =>console.log(err))
       
    }, []);

    return (

        <ItemDetail items={dato}/>
    );

}
export default ItemDetailConteiner;