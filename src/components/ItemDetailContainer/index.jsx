import React from "react";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail";
/* import arrayProductos from "../../json/arrayProductos.json";*/
import {getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "Items", id);
        getDoc(queryDoc)
            .then(res=>setItem({id: res.id, ...res.item()}))
    },[id])

    return (
        <div className="container">
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;