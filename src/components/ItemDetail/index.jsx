import '../ItemDetail/ItemDetail.css';
import React, {useState} from "react";
import ItemCount from "../ItemCount";
import {Link} from "react-router-dom";

const ItemDetail = ({item}) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
        setGoToCart(quantity);
    }

    return (
    <div className="item">
        <div className="itemDetail">
            <img src={item.imagen} className="itemImg" alt={item.nombre}/>
            <h1 className="itemTitle">{item.nombre}</h1>
            <p className='itemDescripcion'>{item.descripcion}</p>
            <p className="itemPrecio">${item.precio}</p> 
            {
                goToCart
                    ? <Link to="/Cart">Ir al Carrito</Link>
                    : <ItemCount initial={1} stockItems={item.stock} onAdd={onAdd}/>
            }
        </div>
    </div> 
    )
}

export default ItemDetail;
