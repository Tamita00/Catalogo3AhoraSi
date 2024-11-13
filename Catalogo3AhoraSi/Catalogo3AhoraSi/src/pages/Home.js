import { useEffect, useState } from 'react';
import { fetchProducts } from '../data/apiManager';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchProducts();
            const randomProducts = response.data.products
                .sort(() => 0.5 - Math.random())
                .slice(0, 6);
            setProducts(randomProducts);
        };

        fetchData();
    }, []);

    // Estilos en línea
    const styles = {
        container: {
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
        },
        title: {
            fontSize: '24px',
            textAlign: 'center',
            marginBottom: '20px',
        },
        carousel: {
            display: 'flex',
            overflowX: 'auto',
            gap: '10px',
            paddingBottom: '20px',
        },
        carouselImage: {
            borderRadius: '5px',
            width: '200px',
            height: '300px',
            objectFit: 'cover',
        },
        productsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '15px',
            padding: '10px',
        },
        productCard: {
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            textAlign: 'center',
        },
        productImage: {
            maxWidth: '100%',
            borderRadius: '5px',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Home</h1>
            <h2 style={styles.title}>Productos Destacados</h2>
            <div style={styles.carousel}>
                {products.map((product, index) => (
                    <img key={index} src={product.thumbnail} alt={product.title} style={styles.carouselImage} />
                ))}
            </div>
        </div>
    );
};

export default Home;
