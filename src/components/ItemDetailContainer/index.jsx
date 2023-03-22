import React from "react";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail";
import arrayProductos from "../../json/arrayProductos.json";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() =>{
        const getProduct = () => {
            return new Promise((resolve) => {
                const productoFiltrado  = arrayProductos.find(p => p.id === parseInt(id))
                setTimeout(() => {
                    resolve(productoFiltrado)
                }, 2000)
            })
          }
        
        getProduct.then((id) => {
            setItem(id);
        })
    },[id])

    return(
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;