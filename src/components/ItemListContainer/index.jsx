import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
/*import arrayProductos from "../../json/arrayProductos.json";*/
import ItemList from "../ItemList";
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore";

const ItemListContainer = () => {

    const[item,setItem]= useState([]);
    const{id}  = useParams();
    
    useEffect(()=>{
      const queryDb = getFirestore();
      const queryCollection = collection(queryDb, 'Items');
      if(id){
      const queryFilter = query(queryCollection, where('id', '==', id))
      getDocs(queryFilter)
      .then(res=>setItem(res.docs.map(p=>({id: p.id, ...p.item()}))))
      }else{
        getDocs(queryCollection)
        .then(res=>setItem(res.docs.map(p=>({id: p.id, ...p.item()}))))
      }
       },[id])

    return (
        <div className="container">
            <div className="row">
                <ItemList item={item} />
            </div>
        </div>       
    )
}

export default ItemListContainer;