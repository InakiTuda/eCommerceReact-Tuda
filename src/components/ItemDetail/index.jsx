import React from "react";
import ItemCount from "../ItemCount";

const ItemDetail = ({item}) => {
    return (
    <body>
    <div className="row" id="itemdetail">
        <div className="col-md-4 offset-md-4">
            <img src={item.imagen} className="img-fluid" alt={item.nombre} />
            <h1 className="title">{item.nombre}</h1>
            <p className="price">${item.precio}</p> 
            <div className="carrito">
                <ItemCount stockItems={10}/>
            </div>
        </div>
    </div>
    </body>    
    )
}

export default ItemDetail;
