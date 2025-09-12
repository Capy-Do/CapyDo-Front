import React, { useState, useEffect } from 'react';
import '../styles/PersonalizarPerfil.css';
import { useNavigate } from 'react-router-dom';

// Importar las imágenes de perfil
import FotoPerfil1 from '../assets/fotosPerfil/FotoPerfil1.png';
import FotoPerfil2 from '../assets/fotosPerfil/FotoPerfil2.png';
import FotoPerfil3 from '../assets/fotosPerfil/FotoPerfil3.png';
import FotoPerfil4 from '../assets/fotosPerfil/FotoPerfil4.png';
import FotoPerfil5 from '../assets/fotosPerfil/FotoPerfil5.png';
import FotoPerfil6 from '../assets/fotosPerfil/FotoPerfil6.png';
import FotoPerfil7 from '../assets/fotosPerfil/FotoPerfil7.png';
import FotoPerfil8 from '../assets/fotosPerfil/FotoPerfil8.png';

// Importar iconos (asegúrate de tener estos archivos en tu proyecto)
import NivelIcon from '../assets/icons/nivel.svg';
import InstitucionIcon from '../assets/icons/institucion.svg';
import UbicacionIcon from '../assets/icons/ubicacion.svg';
import DiscordIcon from '../assets/icons/social/discord.svg';
import GitHubIcon from '../assets/icons/social/github.svg';
import LinkedInIcon from '../assets/icons/social/linkedin.svg';
import WhatsappIcon from '../assets/icons/social/whatsapp.svg';

const PersonalizarPerfil = () => {
    const navigate = useNavigate(); 
    const [educationLevel, setEducationLevel] = useState("");
    const [institutionName, setInstitutionName] = useState("");
    const [biography, setBiography] = useState('Aquí va tu biografía. ✏️');
    const [fullName, setFullName] = useState("Nombre y Apellido"); 
    const [role, setRole] = useState("Rol");
    const [userName, setUserName] = useState("nombreUsuario");
    const [mail, setMail] = useState("nombre@mail.com");
    const [selectedPhoto, setSelectedPhoto] = useState(FotoPerfil8);
    const [isEditing, setIsEditing] = useState(false);
    const [location, setLocation] = useState({ loaded: false, city: "", country: "" });
    const [socialLinks, setSocialLinks] = useState({
        discord: "",
        github: "",
        linkedin: "",
        whatsapp: ""
    });
    const [loaded, setLoaded] = useState(false);

    const fotosPerfil = [
        { id: 1, image: FotoPerfil1 },
        { id: 2, image: FotoPerfil2 },
        { id: 3, image: FotoPerfil3 },
        { id: 4, image: FotoPerfil4 },
        { id: 5, image: FotoPerfil5 },
        { id: 6, image: FotoPerfil6 },
        { id: 7, image: FotoPerfil7 },
        { id: 8, image: FotoPerfil8 }
    ];

    useEffect(() => {
        // Simular carga de datos
        setTimeout(() => {
            setLoaded(true);
        }, 500);
        
        // Obtener ubicación del usuario
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const response = await fetch(
                            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=es`
                        );
                        const data = await response.json();
                        setLocation({
                            loaded: true,
                            city: data.city,
                            country: data.countryName
                        });
                    } catch (error) {
                        setLocation({
                            loaded: true,
                            city: "",
                            country: ""
                        });
                    }
                },
                (error) => {
                    setLocation({
                        loaded: true,
                        city: "",
                        country: ""
                    });
                }
            );
        } else {
            setLocation({
                loaded: true,
                city: "",
                country: ""
            });
        }
    }, []);

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleSocialLinkChange = (platform, value) => {
        setSocialLinks(prev => ({
            ...prev,
            [platform]: value
        }));
    };

    const handleSave = () => {
        const userData = {
            fullName,
            role,
            userName,
            mail,
            educationLevel,
            institutionName,
            biography,
            selectedPhoto,
            socialLinks
        };

    localStorage.setItem('userProfile', JSON.stringify(userData));
    navigate('/perfil');
    };

    const handleCancel = () => {
    navigate('/perfil');
    };

    return (
        <div className="app">
            <div className="container-profile-card">
                <div className={`profile-card ${loaded ? 'loaded' : ''}`}>
                    {/* Botón de edición */}
                    <div className="edit-button-container">
                        {isEditing ? (
                            <button className="save-button" onClick={handleSave}>
                                Guardar
                            </button>
                        ) : (
                            <button className="edit-button" onClick={() => setIsEditing(true)}>
                                Editar Perfil
                            </button>
                        )}
                    </div>

                    {/* Header con foto */}
                    <div className="profile-header">
                        <img src={selectedPhoto} alt="Foto de perfil" className="profile-image"/>
                        
                        {isEditing && (
                            <div className="photo-selector">
                                <h3>Selecciona una foto de perfil:</h3>
                                <div className="photo-options">
                                    {fotosPerfil.map((foto) => (
                                        <img 
                                            key={foto.id}
                                            src={foto.image} 
                                            alt={`Foto de perfil ${foto.id}`}
                                            className={`photo-option ${selectedPhoto === foto.image ? 'selected' : ''}`}
                                            onClick={() => setSelectedPhoto(foto.image)}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Nombre y Rol */}
                    <div className="profile-details">
                        {isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => handleInputChange(e, setFullName)}
                                    className="edit-input"
                                    placeholder="Nombre y Apellido"
                                />
                                <input
                                    type="text"
                                    value={role}
                                    onChange={(e) => handleInputChange(e, setRole)}
                                    className="edit-input"
                                    placeholder="Rol"
                                />
                            </>
                        ) : (
                            <>
                                <h1 className="profile-name">{fullName}</h1>
                                <p className="profile-title">{role}</p>
                            </>
                        )}
                    </div>

                    {/* Biografía */}
                    <div className="profile-bio">
                        {isEditing ? (
                            <textarea
                                value={biography}
                                onChange={(e) => handleInputChange(e, setBiography)}
                                className="edit-textarea"
                                placeholder="Escribe tu biografía aquí..."
                            />
                        ) : (
                            <p className="bio-text">{biography}</p>
                        )}
                    </div>

                    {/* Información de usuario */}
                    <div className="user-info">
                        {isEditing ? (
                            <>
                                <div className="info-item">
                                    <label>Nombre de usuario:</label>
                                    <input
                                        type="text"
                                        value={userName}
                                        onChange={(e) => handleInputChange(e, setUserName)}
                                        className="edit-input"
                                    />
                                </div>
                                <div className="info-item">
                                    <label>Correo electrónico:</label>
                                    <input
                                        type="email"
                                        value={mail}
                                        onChange={(e) => handleInputChange(e, setMail)}
                                        className="edit-input"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="username">@{userName}</p>
                                <p className="email">{mail}</p>
                            </>
                        )}
                    </div>

                    {/* Otros detalles */}
                    <div className="profile-details">
                        <div className="detail-item">
                            <img src={NivelIcon} alt="Nivel Educativo" className='detail-icon'/>
                            <div className="detail-content">
                                <h4>Nivel Educativo</h4>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={educationLevel}
                                        onChange={(e) => handleInputChange(e, setEducationLevel)}
                                        className="edit-input"
                                        placeholder="Ej: Universitario, Secundario, etc."
                                    />
                                ) : (
                                    <p>{educationLevel || "No especificado"}</p>
                                )}
                            </div>
                        </div>

                        <div className="detail-item">
                            <img src={InstitucionIcon} alt="Institución Educativa" className="detail-icon" />
                            <div className="detail-content">
                                <h4>Institución</h4>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={institutionName}
                                        onChange={(e) => handleInputChange(e, setInstitutionName)}
                                        className="edit-input"
                                        placeholder="Nombre de la institución"
                                    />
                                ) : (
                                    <p>{institutionName || "No especificado"}</p>
                                )}
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
                    <div className="social-section">
                        <h3>Redes Sociales</h3>
                        <div className="social-links">
                            {['discord', 'github', 'linkedin', 'whatsapp'].map((platform) => (
                                <div key={platform} className="social-link-item">
                                    <img 
                                        src={
                                            platform === 'discord' ? DiscordIcon :
                                            platform === 'github' ? GitHubIcon :
                                            platform === 'linkedin' ? LinkedInIcon :
                                            WhatsappIcon
                                        } 
                                        alt={platform} 
                                        className="social-icon" 
                                    />
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={socialLinks[platform]}
                                            onChange={(e) => handleSocialLinkChange(platform, e.target.value)}
                                            className="social-input"
                                            placeholder={`Usuario de ${platform}`}
                                        />
                                    ) : socialLinks[platform] ? (
                                        <a 
                                            href={socialLinks[platform].includes('://') 
                                                ? socialLinks[platform] 
                                                : `https://${platform}.com/${socialLinks[platform]}`
                                            } 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`social-link ${platform}`}
                                        >
                                            @{socialLinks[platform]}
                                        </a>
                                    ) : (
                                        <span className="no-link">No agregado</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalizarPerfil;