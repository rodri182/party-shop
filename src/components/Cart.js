import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const ctx= useContext(CartContext);

    return (
        <>
            
            <h1>CARRITO</h1>
            <Link to ="/"> Tienda</Link>
            <div>
            {
                (ctx.cartList.length>0)
                 ?   <button onClick={ctx.clear}>Cancelar todo</button>
                 :   <p>Tienda Vacia</p>
            }
           </div>
            
            {
                ctx.cartList.length > 0 &&
                ctx.cartList.map(item=> 
                <CartItem
                    key={item.id}
                    id={item.id}
                    start={0}
                    titulo={item.titulo}
                    cantidad={item.cant}
                    colores={item.colores}
                    producto={item.producto}
                    precio={item.precio}
                    description={item.description}/>
                    )
            
            }
            <div>
            <h1>Total</h1>
            <p>${ctx.precioTotal()}</p>
            </div>
            </>
    );
    }
export default Cart;

    