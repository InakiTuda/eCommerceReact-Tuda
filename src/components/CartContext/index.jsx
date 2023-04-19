import React, {useState} from "react";
export const CartContext = React.createContext([]);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
        }}>
            {children}
        </CartContext.Provider>
    )
} 

export default CartProvider;