import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../data/apiManager';

const Producto = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetchProductById(id);
                setProduct(response.data);
            } catch (err) {
                setError('Error al cargar el producto');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Producto no encontrado</p>;

    // Estilos en línea
    const styles = {
        container: {
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
        },
        title: {
            fontSize: '28px',
            marginBottom: '10px',
            color: '#333',
        },
        description: {
            fontSize: '16px',
            lineHeight: '1.5',
            marginBottom: '20px',
            color: '#555',
        },
        image: {
            maxWidth: '100%',
            borderRadius: '8px',
            marginBottom: '20px',
        },
        price: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#007bff',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{product.title}</h1>
            <p style={styles.description}>{product.description}</p>
            <img
                src={product.thumbnail}
                alt={product.title}
                style={styles.image}
            />
            <p style={styles.price}>Precio: ${product.price}</p>
        </div>
    );
};

export default Producto;
