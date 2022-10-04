import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addProducto = (item, qty) => {
    let buscar = cartList.find((producto) => producto.id === item.id) 
    if (buscar === undefined) {
      setCartList([...cartList,
        {
          id:item.id,
          start:0,
          titulo:item.titulo,
          cant:qty,
          colores:item.colores,
          producto:item.producto,
          precio:item.precio,
          description:item.description,
        }
      ]);
     
    } else {
      buscar.cant +=qty;
    }
  };

  const addItem = (producto, qty) => {
    setCartList([...cartList, producto]);
  };
  const clear = () => {
    setCartList([]);
  };
  
  const removeItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const calItemCant =() => {
    let cants= cartList.map(item =>item.cant);
    return cants.reduce(((previousValue, currentValue) => previousValue + currentValue),0)
  
  }
  const calcPorItem= (id) => {
    let index =cartList.map(item => item.id).indexOf(id);
    return cartList[index].precio * cartList[index].cant;
  }
  const precioTotal = () => {
    let total=  cartList.map(item => calcPorItem(item.id))
    return total.reduce((previousValue, currentValue) => previousValue + currentValue);
}
  return ( 
    <CartContext.Provider value = {{ 
        clear,  
        removeItem,
        addProducto,
        addItem,
        cartList,
        calItemCant,
        calcPorItem,
        precioTotal,
        }}> 

    {children} 
    
    </CartContext.Provider>
    );
}
       
export default CartContextProvider;
