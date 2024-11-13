import React, { useState } from 'react';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        edad: '',
    });

    // Estilos en línea
    const styles = {
        container: {
            padding: '20px',
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        },
        title: {
            fontSize: '24px',
            marginBottom: '20px',
            textAlign: 'center',
            color: '#333',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
            color: '#555',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            boxSizing: 'border-box',
        },
        button: {
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 15px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '10px',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log('Datos del formulario:', formData);
        // Reiniciar el formulario después de enviar (opcional)
        setFormData({
            nombre: '',
            apellido: '',
            email: '',
            edad: '',
        });
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Página de Contacto</h1>
            <form onSubmit={handleSubmit}>
                {['nombre', 'apellido', 'email', 'edad'].map((field, index) => (
                    <div key={index} style={styles.formGroup}>
                        <label htmlFor={field} style={styles.label}>
                            {field.charAt(0).toUpperCase() + field.slice(1)}:
                        </label>
                        <input
                            type={field === 'edad' ? 'number' : 'text'}
                            style={styles.input}
                            id={field}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contacto;
