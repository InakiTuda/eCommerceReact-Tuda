import '../ItemDetail/ItemDetail.css';
import React from "react";
import ItemCount from "../ItemCount";

const ItemDetail = ({item}) => {
    return (
    <div className="item">
        <div className="itemDetail">
            <img src={item.imagen} className="itemImg" alt={item.nombre}/>
            <h1 className="itemTitle">{item.nombre}</h1>
            <p className='itemDescripcion'>{item.descripcion}</p>
            <p className="itemPrecio">${item.precio}</p> 
            <div className="carrito"><ItemCount stockItems={item.stock}/></div>
        </div>
    </div> 
    )
}

export default ItemDetail;
