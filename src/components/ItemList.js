import React from "react";
import Item from "./Item";


const ItemList = ({products}) => {  
    return (
        <>
           {
                products.map(item=> <Item
                key={item.id}
                id={item.id}
                start={0}
                titulo={item.titulo}
                cant={item.cant}
                colores={item.colores}
                producto={item.producto}
                precio={item.precio}
                description={item.description}
                
              />)
           }

        </>
    )
}
export default ItemList;
