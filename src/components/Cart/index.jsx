import React from "react";
import {Link} from "react-router-dom";
import {useCartContext} from "../CartContext";
import CartItem from "../CartItem";
import {addDoc, getFirestore, collection} from "firebase/firestore";

const Cart = () => {
    const {cart, totalPrice} = useCartContext()

    const order = {
        buyer: {
            name: "Pablo",
            email: "Pablo@gmail.com",
            phone: "123123",
            address: "Pablo 123"
        },
        items: cart.map(product => ({id: product.id, title: product.id, price: product.id, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "Orders");
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
                <p>El carrito está vacío <i class="bi bi-emoji-frown"></i></p>
                <Link to='/'>Seguir comprando</Link>
            </>
        );
    }

    return (
        <>
            {cart.map(product => <CartItem key={product.id} product={product}/>)}
            <p>
                Total: ${totalPrice()}
            </p>
            <button onClick={handleClick}>Emitir Orden de Compra</button>
        </>
    )
}

export default Cart;