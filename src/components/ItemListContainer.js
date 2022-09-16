import ItemList from "./ItemList";
import { useEffect, useState } from 'react';
import customFetch from "../utils/CustomFetch";
import productos from "../utils/productos";


const ItemListContainer = ({greeting}) => {
 
  const[datos,setDatos]= useState([]);
  useEffect(() => {
    customFetch(2000, productos)
    .then(result => setDatos(result))
    .catch(err =>console.log(err))
     
  }, []);


  return (
    <>
    <div>{greeting}</div>
    <ItemList products={datos}/>
    </>
  );
};

export default ItemListContainer;
