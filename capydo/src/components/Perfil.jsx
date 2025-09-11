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

import EditarIcon from '../assets/icons/editar.svg';

import FotoPerfil1 from '../assets/fotosPerfil/FotoPerfil1.png'
import FotoPerfil2 from '../assets/fotosPerfil/FotoPerfil2.png'
import FotoPerfil3 from '../assets/fotosPerfil/FotoPerfil3.png'
import FotoPerfil4 from '../assets/fotosPerfil/FotoPerfil4.png'
import FotoPerfil5 from '../assets/fotosPerfil/FotoPerfil5.png'

import AgregarIcon from '../assets/icons/agregar.svg';



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
const [biography] = useState(
    'Aquí va tu biografía. ✏️'
);

const [fullName] = useState("Nombre y Apellido");
const [role] = useState("Rol");

const [userName] = useState("nombreUsuario");
const [mail] = useState("nombre@mail.com");

const [friends] = useState([
    { id: 1, name: "@CarpinchoCósmico", image: FotoPerfil1 },
    { id: 2, name: "@MudBuddy", image: FotoPerfil2 },
    { id: 3, name: "@SirCarpincho", image: FotoPerfil3 },
    { id: 4, name: "@Fluffinator", image: FotoPerfil4 },
    { id: 5, name: "@ChillPincho", image: FotoPerfil5 }
]);

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
        <div className="container-profile-card">
            <div className={`profile-card ${loaded ? 'loaded' : ''}`}>
            {/* Header con foto */}
            <div className="profile-header">
                <img src='../src/assets/fotosPerfil/fotoPerfil8.png' alt="" className="profile-image"/>
            </div>

            {/* Nombre y Rol */}
            <div className="profile-details">
                <h1 className="profile-name">{fullName}</h1>
                <p className="profile-title">{role}</p>
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

        <div className="container-biography">
            {/* Información de usuario y botón de edición */}
            <div className="profile-header-section">
            <div className="user-info">
                <h1 className="profile-username">@{userName}</h1>
                <p className="profile-mail">{mail}</p>
            </div>
            <button className="edit-btn">
                <img src={EditarIcon} alt="Editar" className="editar-btn" />
                Editar Perfil
            </button>
            </div>
            
            {/* Biografía */}
            <div className="bio-block">
            <h4>Biografía</h4>
            <p>{biography}</p>
            </div>
            
            <div className="extra-sections">
                {/* Amigos */}
                <div className="friends-section">
                    <div className="friends-header">
                        <h3 className="friends-title">Amigos</h3>
                        <button className="add-friend-btn">
                            <img src={AgregarIcon} alt="Agregar" />
                        </button>
                    </div>
                    <div className="friends-list">
                        {friends.map(friend => (
                        <div key={friend.id} className="friend-item">
                            <div className="friend-avatar">
                                <img src={friend.image} alt={friend.name} className="friend-image" />
                            </div>
                            <span className="friend-name">{friend.name}</span>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Actividad Reciente */}
                <div className="activity-section">
                    <h3 className="section-title">Actividad reciente</h3>
                    <ul className="activity-list">
                        <li className="activity-item asignada">Corregir errores de código.</li>
                        <li className="activity-item completa">Diseñar página de inicio.</li>
                        <li className="activity-item completa">Investigar integraciones API.</li>
                    </ul>
                </div>

                {/* Tareas Asignadas */}
                <div className="tasks-section">
                    <h3 className="section-title">Tareas Asignadas</h3>
                    <ul className="task-list">
                        <li className="task-item urgente">
                            Diseñar página de ajustes <span>30 may</span>
                        </li>
                        <li className="task-item pospuesto">
                            Revisar propuesta UX para móvil <span>24 may</span>
                        </li>
                        <li className="task-item cancelado">
                            Prototipar vista de grupos <span>24 may</span>
                        </li>
                        <li className="task-item progreso">
                            Actualizar documentación del proyecto <span>1 jun</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);
};

export default Perfil;