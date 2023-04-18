import '../Item/Item.css';
import React from "react";
import {Link} from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="card">
                <div className="cardItem">
                <img src={item.imagen} className="cardImg" alt={item.nombre}/>
                <div className="card-body text-center">
                    <b className="card-text text-black text-uppercase">{item.nombre}</b>
                    <p className="card-price text-black">${item.precio}</p>
                </div>
            </div>
            <Link to={`/item/${item.id}`} className="text-decoration-none">
            <button className="detalles">Ver Productos</button>
            </Link>
        </div>
    )
}

export default Item;