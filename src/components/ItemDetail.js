import ItemCount from "./ItemCount";
import Container from 'react-bootstrap/Container';
import {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const ItemDetail =({item}) => {

    const[itemCount, setItemCount]= useState(0);
    const ctx= useContext(CartContext);
    const onAdd = (qty) => {
        alert (" usted ha elejido " + qty + " unidades de este producto");
        setItemCount(qty);
        ctx.addItem(item, qty);
    }
    
  return (
   
      <>
       {
        item && item.producto
        ?
       
          <div className="card mb-3">
              <div className="row g-0">
                  <div className="col-md-4">
                      <img src={item.producto} className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                      <div className="card-body">
                          <h5 className="card-title">{item.titulo}</h5>
                          <p className="card-text">{item.description}</p>
                          <p className="card-text">Cantidad: {item.cant}</p>
                          <p className='card-text'>{item.colores}</p>
                          <p className='card-text'>${item.precio}</p>
                      </div>
                      <div>
                      {
                        itemCount === 0
                            ?<ItemCount stock={item.cant} initial={itemCount} onAdd={onAdd}/>
                            :<Link to="/cart"><button color="secondary">ir al carro</button></Link>
                      }
                      </div>
                      <p>.....</p>
                  </div>
              </div>
          </div>
            
            :<p>Cargando.....</p>
         }
      </>
 );
}

export default ItemDetail;
