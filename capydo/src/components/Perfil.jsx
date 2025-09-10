// Perfil.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Perfil.css';

import InstitucionIcon from '../assets/icons/institucion.svg';
import NivelIcon from '../assets/icons/nivel.svg';
import UbicacionIcon from '../assets/icons/ubicacion.svg';

import DiscordIcon from '../assets/icons/social/discord.svg';
import GitHubIcon from '../assets/icons/social/github.svg';
import LinkedInIcon from '../assets/icons/social/linkedin.svg';
import WhatsappIcon from '../assets/icons/social/whatsapp.svg';

const Perfil = () => {
const [loaded, setLoaded] = useState(false);
const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
    city: "",
    country: ""
});

const [educationLevel] = useState("Superior");
const [institutionName] = useState("Universidad Nacional de San Rafael");
const [bibliography] = useState(
    'Aquí va tu biografía.'
);

const [fullName] = useState("Nombre y Apellido");
const [role] = useState("Rol profesional");

useEffect(() => {
    const timer = setTimeout(() => {
        setLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
}, []);

// Geolocalización
const onSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=es`)
        .then(response => response.json())
        .then(data => {
        setLocation({
            loaded: true,
            coordinates: { lat: latitude, lng: longitude },
            city: data.city || data.locality || "Desconocida",
            country: data.countryName || "Desconocido"
        });
        })
        .catch(error => {
        console.error("Error obteniendo datos de ubicación:", error);
        });
};

const onError = (error) => {
    setLocation(prev => ({
        ...prev,
        loaded: true,
        error: { code: error.code, message: error.message }
    }));
};

useEffect(() => {
    if (!("geolocation" in navigator)) {
        onError({ code: 0, message: "Geolocalización no soportada" });
        return;
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}, []);

    return (
    <div className="app">
        <div className="container">
            <div className={`profile-card ${loaded ? 'loaded' : ''}`}>
                {/* Header con foto y botón */}
                <div className="profile-header">
                    <img src='../src/assets/fotosPerfil/fotoPerfil8.png' alt="" className="profile-image"/>
                    <button className="edit-btn">Editar Perfil</button>
                </div>

                {/* Nombre, Rol y Bibliografía */}
                <div className="profile-details bio-block">
                    <h1 className="profile-name">{fullName}</h1>
                    <p className="profile-title">{role}</p>
                    <h4>Bibliografía</h4>
                    <p>{bibliography}</p>
                </div>

                {/* Otros detalles */}
                <div className="profile-details">
                    <div className="detail-item">
                    <img src={NivelIcon} alt="Nivel Educativo" className='detail-icon'/>
                        <div className="detail-content">
                            <h4>Nivel Educativo</h4>
                            <p>{educationLevel || "No especificado"}</p>
                        </div>
                </div>

<div className="detail-item">
    <img src={InstitucionIcon} alt="Institución Educativa" className="detail-icon" />
    <div className="detail-content">
        <h4>Institución</h4>
        <p>{institutionName}</p>
    </div>
</div>
<div className="detail-item">
    <img src={UbicacionIcon} alt="Ubicación Actual" className="detail-icon" />
        <div className="detail-content">
            <h4>Ubicación Actual</h4>
            {location.loaded ? (
            location.city ? (
            <p>{location.city}, {location.country}</p>
            ) : (
            <p>No se pudo detectar la ubicación</p>
            )
            ) : (
            <p>Detectando ubicación...</p>
            )}
        </div>
    </div>
</div>

{/* Redes sociales */}
    <div className="social-links">
        <a href="#" className="social-link discord">
            <img src={DiscordIcon} alt="Discord" className="social-icon" />
        </a>
        <a href="#" className="social-link github">
            <img src={GitHubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="#" className="social-link linkedin">
            <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="#" className="social-link whatsapp">
            <img src={WhatsappIcon} alt="WhatsApp" className="social-icon" />
        </a>
    </div>

{/* Stats */}
    <div className="profile-stats">
        <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label"> Proyectos <br/>Realizados</span>
        </div>
        <div className="stat">
            <span className="stat-number">5</span>
            <span className="stat-label"> Certificaciones </span>
        </div>
        <div className="stat">
            <span className="stat-number">1</span>
            <span className="stat-label">Grupos</span>
        </div>
    </div>
    </div>
    </div>
</div>
);
};

export default Perfil;
