import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../data/apiManager';
import { CartContext } from '../context/CartContext'; // Cambiar a CartContext

const Products = () => {
    const { addToCart } = useContext(CartContext); // Usar CartContext
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchProducts();
            setProducts(response.data.products);
            setFilteredProducts(response.data.products);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const updatedProducts = products.filter(product => {
            const matchesCategory = category ? product.category === category : true;
            const matchesSearch = search ? product.title.toLowerCase().includes(search.toLowerCase()) : true;
            return matchesCategory && matchesSearch;
        });
        setFilteredProducts(updatedProducts);
    }, [category, search, products]);

    // Estilos en línea
    const styles = {
        container: {
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        header: {
            fontSize: '28px',
            marginBottom: '20px',
            color: '#333',
        },
        searchInput: {
            padding: '10px',
            fontSize: '16px',
            marginRight: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        },
        categorySelect: {
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '20px',
        },
        productsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
        },
        productCard: {
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
            transition: 'box-shadow 0.3s',
        },
        productTitle: {
            fontSize: '18px',
            marginBottom: '10px',
            color: '#007bff',
        },
        productImage: {
            maxWidth: '100%',
            borderRadius: '5px',
            marginBottom: '10px',
        },
        button: {
            margin: '5px 0',
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Productos</h1>
            <div>
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.searchInput}
                />
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    style={styles.categorySelect}
                >
                    <option value="">Todas las categorías</option>
                    {/* Aquí puedes agregar opciones de categorías obtenidas desde el contexto o el API */}
                </select>
            </div>

            <div style={styles.productsGrid}>
                {filteredProducts.map(product => (
                    <div key={product.id} style={styles.productCard}>
                        <img src={product.thumbnail} alt={product.title} style={styles.productImage} />
                        <h3 style={styles.productTitle}>{product.title}</h3>
                        <button
                            onClick={() => addToCart(product)} // Este ahora llama a CartContext
                            style={styles.button}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
                        >
                            Agregar al carrito
                        </button>
                        <Link to={`/producto/${product.id}`}>
                            <button style={styles.button}>Más info</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
