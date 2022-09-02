import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import estilo from "./Navbar.css";

export const CartWidget =() => {
    return( 
       <div className="icono">
        <FontAwesomeIcon icon={faCartShopping}/>
        </div>
    );
}