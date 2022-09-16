import React from "react";
import Item from "./Item";


const ItemList = ({products}) => {  
    return (
        <>
           {
                products.map(item=> <Item
                key={item.id}
                start={0}
                titulo={item.titulo}
                cant={item.cant}
                colores={item.colores}
                producto={item.producto}
                description={item.description}
              />)
           }

        </>
    )
}
export default ItemList;
