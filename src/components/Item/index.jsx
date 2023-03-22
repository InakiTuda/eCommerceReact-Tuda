import React from "react";
import {Link} from "react-router-dom";
import ItemDetail from "../ItemDetail";

const Item = ({item}) => {
    return (
        <Link to={`/item/${item.id}`} className="text-decoration-none">
            <div className="card">
                <div className="card border border-0">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                    <div className="card-body text-center">
                        <b className="card-text text-black text-uppercase">{item.nombre}</b>
                        <p className="card-price text-black">${item.precio}</p>
                    </div>
                </div>
                <button>Ver Detalle</button>
            </div>
        </Link>
    )
}

export default Item;