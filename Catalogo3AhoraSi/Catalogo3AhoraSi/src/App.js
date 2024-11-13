import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Producto from './pages/Producto';
import Cart from './pages/Cart';
import NoPage from './pages/NoPage';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext'; // Importa CartProvider

export default function App() {
    return (
        <ProductProvider>
            <CartProvider> {/* Envuelve toda la app en CartProvider */}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="productos" element={<Products />} />
                            <Route path="producto/:id" element={<Producto />} />
                            <Route path="carrito" element={<Cart />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </ProductProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
