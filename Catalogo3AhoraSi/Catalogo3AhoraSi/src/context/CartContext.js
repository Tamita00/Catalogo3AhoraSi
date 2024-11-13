import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Cargar carrito desde localStorage al inicio
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Función para agregar al carrito
  const addToCart = (product) => {
    console.log("Agregando al carrito:", product);
    // Verifica si el producto ya está en el carrito
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        // Si ya está, puedes optar por aumentar la cantidad o simplemente ignorar
        console.log("El producto ya está en el carrito");
        return prevCart; // Ignorar el agregado si ya existe
      }
      return [...prevCart, product]; // Agregar si no existe
    });
  };

  // Función para eliminar del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(product => product.id !== productId));
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
