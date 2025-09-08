import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css'; // Si usás estilos personalizados
import notFoundImage from '../assets/not found.png'

const NotFound = () => {
    return (
        <div className="notfound-container">
            <img src={notFoundImage} alt="Página no encontrada - Capydo" className="notfound-image" />
            <h1>Error 404</h1>
            <p>La página que estás buscando no existe o está en reparación.</p>
            <Link to="/" className="back-home">
            Volver al inicio
            </Link>
        </div>
    );
};

export default NotFound;