import React from "react"


export const ItemListContainer= ({greeting}) => {
    return(
<div className="container-fluid">
           <div>
           <p>{greeting}</p>
          </div>  
</div>

);
}