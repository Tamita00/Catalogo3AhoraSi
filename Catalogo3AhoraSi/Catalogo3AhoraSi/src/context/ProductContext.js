import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        console.log("Agregando producto:", product); // Verificar que se llame
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    return ( 
        <ProductContext.Provider value = {
            { cart, addToCart, removeFromCart } } > { children } 
        </ProductContext.Provider>
    );
};