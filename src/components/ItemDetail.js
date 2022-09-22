import {Contador} from "./ItemCount";
import Container from 'react-bootstrap/Container';
import {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const ItemDetail =({item}) => {

    const[contador, setContador]= useState(0);
    const onAdd = (qty) => {
        alert (" usted ha elejido " + qty + "producto");
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
                        contador===0
                        ?<Contador>hola</Contador>
                        :<Link className="Boton-carro" to="./cart" >Add carro</Link>
                      }
                      </div>
                  </div>
              </div>
          </div>
            
            :<p>Cargando.....</p>
         }
      </>
 );
}

export default ItemDetail;
