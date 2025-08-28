import React, { useState, useEffect } from 'react';
import '../styles/Home.css'; 

// Importar los SVGs como URLs
// SVG de la Barra Lateral
import InicioIcon from '../assets/icons/inicio.svg';
import CalendarioIcon from '../assets/icons/calendario.svg';
import FavoritosIcon from '../assets/icons/favoritos.svg';
import EspaciosIcon from '../assets/icons/espacios.svg';
import AgregarEspacioIcon from '../assets/icons/agregarEspacio.svg';

// SVG del Banner de Bienvenida
import EditarIcon from '../assets/icons/editar.svg';

const CapyDo = () => {
  const [activeItem, setActiveItem] = useState('');
  const [fechaActual, setFechaActual] = useState('');
  const [saludo, setSaludo] = useState('');

  // --- Generar fecha y saludo dinámico ---
  useEffect(() => {
    const hoy = new Date();

    // Fecha en español
    const opciones = { weekday: 'long', day: 'numeric', month: 'long' };
    const fechaFormateada = hoy.toLocaleDateString('es-ES', opciones);
    const fechaCapitalizada = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
    setFechaActual(fechaCapitalizada);

    // Saludo según la hora
    const hora = hoy.getHours();
    if (hora >= 6 && hora < 12) {
      setSaludo('Buenos días');
    } else if (hora >= 12 && hora < 19) {
      setSaludo('Buenas tardes');
    } else {
      setSaludo('Buenas noches');
    }
  }, []);

  // Manejo de selección de items
  const handleItemClick = (itemName) => {
    if (activeItem === itemName) {
      setActiveItem('');
    } else {
      setActiveItem(itemName);
    }
  };

  // Menú lateral
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
            <p className="banner-fecha">{fechaActual}</p>
            <h2 className="banner-saludo">{saludo}, Usuario</h2>
            <p className="banner-mensaje">¿Listo para avanzar en tus metas?</p>
          </div>
          <button className="banner-boton">
            <img src={EditarIcon} alt="Editar" className="icono-boton" />
            Personalizar
          </button>
        </section>
      </main>
    </div>
  );
};

export default CapyDo;
