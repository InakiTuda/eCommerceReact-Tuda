import React from "react";
import "./CartItem.css";
import { useCartContext } from "../CartContext";

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
    return (
        <div className="itemCart">
            <img src={product.imagen} alt={product.nombre}/>
            <div>
                <p>Nombre: {product.nombre}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio U: ${product.precio}</p>
                <p>Subtotal: ${product.quantity * product.precio}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;