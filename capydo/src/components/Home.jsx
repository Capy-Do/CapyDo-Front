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
  const [activeItem, setActiveItem] = useState('');

  // Función para manejar la selección/deselección de items
  const handleItemClick = (itemName) => {
    if (activeItem === itemName) {
      // Si el item ya está activo, lo deseleccionamos
      setActiveItem('');
    } else {
      // Si no está activo, lo seleccionamos
      setActiveItem(itemName);
    }
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
                onClick={() => handleItemClick(item.name)}
                style={{cursor: 'pointer'}}
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

            {/* Botón para agregar espacio */}
            <img 
              src={AgregarEspacioIcon} 
              alt="Agregar Espacio" 
              className="agregar-icon" 
              onClick={() => console.log("Abrir modal o acción para agregar espacio")} 
            />
          </div>
          
          {/* Mensaje por defecto */}
          <p className="subEspacios">Seleccioná un espacio para organizar tu trabajo</p>
        </section>

        <div className="barraLateral-imagen">
          <img 
            src="../src/assets/carpinchoBarraLateral.jpg" 
            alt="Carpincho decorativo" 
          />
        </div>
      </aside>

      <main className="contenido-principal">
        {/* Banner de bienvenida */}
        <section className="banner-bienvenida">
          <div className="banner-texto">
            <p className="banner-fecha">Miércoles, 25 de Junio</p>
            <h2 className="banner-saludo">Buenos días, Usuario</h2>
            <p className="banner-mensaje">¿Listo para avanzar en tus metas?</p>
          </div>
          <button className="banner-boton">✏️ Personalizar</button>
        </section>
      </main>
    </div>
  );
};

export default CapyDo;