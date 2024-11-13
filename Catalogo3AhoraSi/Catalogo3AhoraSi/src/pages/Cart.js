import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: '24px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    emptyMessage: {
      textAlign: 'center',
      fontStyle: 'italic',
    },
    productList: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
    },
    productItem: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
    },
    removeButton: {
      backgroundColor: '#e74c3c',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '5px 10px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    removeButtonHover: {
      backgroundColor: '#c0392b',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p style={styles.emptyMessage}>Tu carrito está vacío.</p>
      ) : (
        <ul style={styles.productList}>
          {cart.map(product => (
            <li key={product.id} style={styles.productItem}>
              <div>
                <h3>{product.title}</h3>
                <p>Precio: ${product.price}</p>
              </div>
              <button 
                style={styles.removeButton} 
                onClick={() => removeFromCart(product.id)}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.removeButtonHover.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.removeButton.backgroundColor}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
