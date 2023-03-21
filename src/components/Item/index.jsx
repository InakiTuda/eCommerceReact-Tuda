import React from "react";
import {Link} from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none" >
            <div className="card">
                <div className="card border border-0">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                    <div className="card-body text-center">
                        <p className="card-text text-black">{item.nombre}</p>
                        <p className="card-price text-black">${item.precio}</p>
                        <button>Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </Link> 
    )
}

export default Item;