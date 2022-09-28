import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Badge } from "@mui/material";

const CartWidget =() => {
    const ctx= useContext(CartContext);
    return( 
       
        <Badge badgeContent ={ctx.calItemCant()} color="primary">

        <FontAwesomeIcon icon={faCartShopping}/>
        </Badge>
    
    );
}

export default CartWidget;