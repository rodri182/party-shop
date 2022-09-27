import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";


const Cart = () => {
    const ctx= useContext(CartContext);
    return (
        <>
            
            <h1>CARRITO</h1>
            <button onClick={ctx.clear}>Cancelar todo</button>
            {
                ctx.cartList.map(item=> 
                <CartItem
                    key={item.id}
                    id={item.id}
                    start={0}
                    titulo={item.titulo}
                    cant={item.cant}
                    colores={item.colores}
                    producto={item.producto}
                    precio={item.precio}
                    description={item.description}
                    />
                    )
            }
            
        </>
    );
    }
export default Cart;

    