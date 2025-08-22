    import React, { useState } from 'react';
    import '../styles/Home.css'; // Asumiendo que tienes este archivo CSS

    const CapyDo = () => {
    const [activeItem, setActiveItem] = useState('Inicio');
    const [spaces, setSpaces] = useState([
        { id: 1, name: 'Proyecto Personal', favorite: false },
        { id: 2, name: 'Trabajo', favorite: true }, 
        { id: 3, name: 'Estudios', favorite: false },
    ]);

    const toggleFavorite = (id) => {
        setSpaces(spaces.map(space => 
        space.id === id ? {...space, favorite: !space.favorite} : space
        ));
    };

    const menuItems = ['Inicio', 'Mi Calendario', 'Favoritos'];

    return (
        <div className="app">
        <header>
            <h1 className="titulo">CapyDo</h1>
        </header>

        <aside className="barraLateral">
            <nav className="barraLateral-nav">
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

            <hr className="separador" />

            <section className="barraLateral-espacios">
            <h2 className="titulo-barraLateral">Espacios</h2>
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