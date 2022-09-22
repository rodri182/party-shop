import ItemList from "./ItemList";
import { useEffect, useState } from 'react';
import customFetch from "../utils/CustomFetch";
import productos from "../utils/productos";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
 
  const[datos,setDatos]= useState([]);
  const{ idCategory } = useParams();
 
  useEffect(() => {
    if(idCategory){
    customFetch(1000, productos.filter(item => item.categoryId == idCategory))
    .then(result => setDatos(result))
    .catch(err =>console.log(err))
  } else {
  customFetch(2000, productos)
    .then(result => setDatos(result))
    .catch(err =>console.log(err))
  }
  }, [idCategory]);


  return (
    <>
   
    <ItemList products={datos}/>
    </>
  );
};

export default ItemListContainer;
