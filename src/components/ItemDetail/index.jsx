import '../ItemDetail/ItemDetail.css';
import React from "react";
import ItemCount from "../ItemCount";

const ItemDetail = ({item}) => {
    return (
    <body>
    <div className="item">
        <div className="itemDetail">
            <img src={item.imagen} className="itemImg" alt={item.nombre}/>
            <h1 className="itemTitle">{item.nombre}</h1>
            <p className="itemPrecio">${item.precio}</p> 
            <div className="carrito"><ItemCount stockItems={10}/></div>
        </div>
    </div>
    </body>    
    )
}

export default ItemDetail;
