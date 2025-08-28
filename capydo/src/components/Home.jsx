import React, { useState } from 'react';
import '../styles/Home.css'; 

// Importar los SVGs como URLs
import InicioIcon from '../assets/icons/inicio.svg';
import CalendarioIcon from '../assets/icons/calendario.svg';
import FavoritosIcon from '../assets/icons/favoritos.svg';
import EspaciosIcon from '../assets/icons/espacios.svg';
import AgregarEspacioIcon from '../assets/icons/agregarEspacio.svg';

// Componente principal de la aplicación
const CapyDo = () => {
  // Estado para controlar qué ítem del menú está activo
  const [activeItem, setActiveItem] = useState('Inicio');

  // Estado para almacenar y gestionar los espacios de trabajo
  const [spaces, setSpaces] = useState([]);

  // Función para alternar el estado de favorito de un espacio
  const toggleFavorite = (id) => {
    setSpaces(spaces.map(space => 
      space.id === id ? {...space, favorite: !space.favorite} : space
    ));
  };

  // Array con los elementos del menú principal
  const menuItems = [
    { 
      name: 'Inicio', 
      icon: <img src={InicioIcon} alt="Inicio" className="menu-icon" />
    },
    { 
      name: 'Mi Calendario', 
      icon: <img src={CalendarioIcon} alt="Calendario" className="menu-icon" />
    },
    { 
      name: 'Favoritos', 
      icon: <img src={FavoritosIcon} alt="Favoritos" className="menu-icon" />
    }
  ];

  return (
    <div className="app">
      <header>
        <h1 className="titulo">CapyDo</h1>
      </header>

      <aside className="barraLateral">
        <nav className="barraLateral-nav">
          {menuItems.map((item, index) => (
            <React.Fragment key={item.name}>
              <div 
                className={`barraLateral-item ${activeItem === item.name ? 'active' : ''}`}
                onClick={() => setActiveItem(item.name)}
              >
                {item.icon}
                <h2 className="titulo-barraLateral">{item.name}</h2>
              </div>
              
              {/* Línea divisoria entre secciones, excepto después del último */}
              {index < menuItems.length - 1 && <hr className="separador" />}
            </React.Fragment>
          ))}
        </nav>

        <hr className="separador" />

        <section className="barraLateral-espacios">
          <div className="espacios-header">
            <img src={EspaciosIcon} alt="Espacios" className="menu-icon" />
            <h2 className="titulo-barraLateral">Espacios</h2>
            <img src={AgregarEspacioIcon} alt="Agregar espacio" className="menu-icon agregar-icon" />
          </div>
          <p className="subEspacios">Seleccioná un espacio para organizar tu trabajo</p>
          
          <div className="espacios-lista">
            {spaces.map(space => (
              <div key={space.id} className="espacio-item">
                <span>{space.name}</span>
                <button 
                  className={`favorito-btn ${space.favorite ? 'active' : ''}`}
                  onClick={() => toggleFavorite(space.id)}
                  aria-label={space.favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                >
                  ★
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="barraLateral-imagen">
          <img 
            src="../src/assets/carpinchoBarraLateral.jpg" 
            alt="Carpincho decorativo" 
          />
        </div>
      </aside>

      <main className="contenido-principal">
        <h2>Bienvenido a CapyDo</h2>
        <p>Selecciona una opción del menú para comenzar.</p>
      </main>
    </div>
  );
};

export default CapyDo;
