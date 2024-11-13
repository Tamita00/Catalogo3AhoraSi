import { Outlet, Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Layout = () => {
    const { cart } = useContext(CartContext);

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
        },
        nav: {
            backgroundColor: '#007bff',
            padding: '10px',
            borderRadius: '5px',
        },
        navList: {
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            justifyContent: 'space-around',
        },
        navItem: {
            margin: '0 15px',
        },
        navLink: {
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'color 0.3s',
        },
        cartButton: {
            padding: '10px 15px',
            backgroundColor: '#fff',
            color: '#007bff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background-color 0.3s',
        },
    };

    return (
        <div style={styles.container}>
            <nav style={styles.nav}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}>
                        <Link to="/" style={styles.navLink}>Home</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/productos" style={styles.navLink}>Productos</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/carrito" style={styles.navLink}>
                            <button style={styles.cartButton}>
                                Carrito ({cart.length})
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
