import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com',
});

export const fetchProducts = () => api.get('/products');
export const fetchProductById = (id) => {
    return api.get(`/products/${id}`).then(response => {
        console.log(response.data); // Verifica la estructura de los datos
        return response;
    });
};
export const fetchCategories = () => api.get('/products/categories');
export const searchProducts = (query) => api.get(`/products/search?q=${query}`);