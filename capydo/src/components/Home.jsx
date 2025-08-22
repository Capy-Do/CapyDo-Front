import React, { useState } from 'react';
import '../styles/Home.css'; 

// Componente principal de la aplicación
const CapyDo = () => {
  // Estado para controlar qué ítem del menú está activo
const [activeItem, setActiveItem] = useState('Inicio');

  // Estado para almacenar y gestionar los espacios de trabajo
const [spaces, setSpaces] = useState([
    { id: 1, name: 'Proyecto Personal', favorite: false },
    { id: 2, name: 'Trabajo', favorite: true }, 
    { id: 3, name: 'Estudios', favorite: false },
]);

  // Función para alternar el estado de favorito de un espacio
const toggleFavorite = (id) => {
    setSpaces(spaces.map(space => 
    space.id === id ? {...space, favorite: !space.favorite} : space
    ));
};

  // Array con los elementos del menú principal
const menuItems = ['Inicio', 'Mi Calendario', 'Favoritos'];

return (
    // Contenedor principal de la aplicación
    <div className="app">
      {/* Encabezado con el título de la aplicación */}
    <header>
        <h1 className="titulo">CapyDo</h1>
    </header>

      {/* Barra lateral con navegación y espacios de trabajo */}
    <aside className="barraLateral">
        {/* Navegación principal */}
        <nav className="barraLateral-nav">
          {/* Mapeo de los elementos del menú para crear la navegación */}
        {menuItems.map(item => (
            <div 
            key={item} 
            className={`barraLateral-item ${activeItem === item ? 'active' : ''}`}
            onClick={() => setActiveItem(item)}
            >
            <h2 className="titulo-barraLateral">{item}</h2>
            </div>
        ))}
        </nav>

        {/* Separador visual entre secciones */}
        <hr className="separador" />

        {/* Sección de espacios de trabajo */}
        <section className="barraLateral-espacios">
        <h2 className="titulo-barraLateral">Espacios</h2>
        <p className="subEspacios">Seleccioná un espacio para organizar tu trabajo</p>
        
          {/* Lista de espacios de trabajo */}
        <div className="espacios-lista">
            {spaces.map(space => (
            <div key={space.id} className="espacio-item">
                {/* Nombre del espacio */}
                <span>{space.name}</span>
                {/* Botón para marcar/desmarcar como favorito */}
                <button 
                className={`favorito-btn ${space.favorite ? 'active' : ''}`}
                onClick={() => toggleFavorite(space.id)}
                aria-label={space.favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                >
                  {/* Estrella que indica el estado de favorito */}
                ★
                </button>
            </div>
            ))}
        </div>
        </section>

        {/* Imagen decorativa en la barra lateral */}
        <div className="barraLateral-imagen">
        <img 
            src="../src/assets/carpinchoBarraLateral.jpg" 
            alt="Carpincho decorativo" 
        />
        </div>
    </aside>

      {/* Área principal de contenido de la aplicación */}
    <main className="contenido-principal">
        <h2>Bienvenido a CapyDo</h2>
        <p>Selecciona una opción del menú para comenzar.</p>
    </main>
    </div>
);
};

export default CapyDo;