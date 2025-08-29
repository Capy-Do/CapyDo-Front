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

// SVG de la Tabla de Tareas
import AgregarIcon from '../assets/icons/agregar.svg';
import EditarTareaIcon from '../assets/icons/editarTarea.svg';
import EliminarIcon from '../assets/icons/eliminar.svg';
import GuardarIcon from '../assets/icons/guardar.svg';
import GuardarIcon2 from '../assets/icons/guardar2.svg';
import CancelarIcon from '../assets/icons/cancelar.svg';
import CancelarIcon2 from '../assets/icons/cancelar2.svg';

// SVG del Bloc de Notas Personal
import AgregarNotaIcon from '../assets/icons/agregarNota.svg'
import HistorialIcon from '../assets/icons/historial.svg'

const CapyDo = () => {
  const [activeItem, setActiveItem] = useState('');
  const [fechaActual, setFechaActual] = useState('');
  const [activeTab, setActiveTab] = useState('');
  const [saludo, setSaludo] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      setActiveTab(""); // Si ya está seleccionada, la deseleccionamos
    } else {
      setActiveTab(tab); // Sino, la activamos
    }
  };

  const [nota, setNota] = useState(localStorage.getItem("nota") || "");
  const [historialNotas, setHistorialNotas] = useState([]);
  
  // Guardar nota nueva
  const handleAgregarNota = () => {
    if (nota.trim() !== "") {
      const nuevaNota = { id: Date.now(), texto: nota };
      setHistorialNotas([...historialNotas, nuevaNota]);
      localStorage.setItem("historialNotas", JSON.stringify([...historialNotas, nuevaNota]));
    }
  };

  // Mostrar historial guardado
  useEffect(() => {
    const historialGuardado = JSON.parse(localStorage.getItem("historialNotas")) || [];
    setHistorialNotas(historialGuardado);
  }, []);

  // Guardar cambios en tiempo real
  useEffect(() => {
    localStorage.setItem("nota", nota);
  }, [nota]);

  // Efecto para manejar el movimiento del mouse (parallax)
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calcular posición relativa del mouse (valores entre -0.5 y 0.5)
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Estados para el cuadro de tareas
  const [tareas, setTareas] = useState([
    {
      id: 1,
      tarea: 'Subir diseño final del tablero Kanban',
      espacio: 'CopyDo',
      proyecto: 'Diseño',
      vence: '26/06',
      estado: 'En progreso',
      prioridad: 'Baja'
    },
    {
      id: 2,
      tarea: 'Rediseñar Home',
      espacio: 'NetJob',
      proyecto: 'Diseño',
      vence: '',
      estado: 'En progreso',
      prioridad: 'Baja'
    },
    {
      id: 3,
      tarea: 'Corregir bugs en vista calendario',
      espacio: 'CopyDo',
      proyecto: 'Frontend',
      vence: '27/06',
      estado: 'En revision',
      prioridad: 'Media'
    },
    {
      id: 4,
      tarea: 'Preparar presentación final del proyecto',
      espacio: 'CapyDo',
      proyecto: 'Frontend',
      vence: '05/09',
      estado: 'Completada',
      prioridad: 'Alta'
    }
  ]);
  
  const [editandoId, setEditandoId] = useState(null);
  const [tareaEditada, setTareaEditada] = useState(null); // Para respaldar la tarea original
  const [nuevaTarea, setNuevaTarea] = useState({
    tarea: '',
    espacio: '',
    proyecto: '',
    vence: '',
    estado: 'Pendiente',
    prioridad: 'Media'
  });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Filtrar tareas según pestaña activa
  const tareasFiltradas = tareas.filter(tarea => {
    if (activeTab === "Proximas") {
      return tarea.estado === "Pendiente" || tarea.estado === "En progreso";
    }
    if (activeTab === "Atrasadas") {
      // Ejemplo: atrasadas = con fecha vencida
      if (!tarea.vence) return false;
      const [dia, mes] = tarea.vence.split("/").map(Number);
      const fechaVencimiento = new Date(new Date().getFullYear(), mes - 1, dia);
      return fechaVencimiento < new Date() && tarea.estado !== "Completada";
    }
    if (activeTab === "Finalizadas") {
      return tarea.estado === "Completada";
    }
  return true; // Si no hay pestaña activa, muestra todas
});

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

  // Funciones para el manejo de tareas
  const handleAgregarTarea = () => {
    if (nuevaTarea.tarea.trim() === '') return;
    
    const tarea = {
      id: Date.now(),
      ...nuevaTarea
    };
    
    setTareas([...tareas, tarea]);
    setNuevaTarea({
      tarea: '',
      espacio: '',
      proyecto: '',
      vence: '',
      estado: 'Pendiente',
      prioridad: 'Media'
    });
    setMostrarFormulario(false);
  };

  const handleEditarTarea = (id) => {
    const tareaAEditar = tareas.find(tarea => tarea.id === id);
    setTareaEditada({...tareaAEditar}); // Respaldo de la tarea original
    setEditandoId(id);
  };

  const handleGuardarEdicion = () => {
    // Los cambios ya están guardados en el estado tareas
    setEditandoId(null);
    setTareaEditada(null); // Limpiamos el respaldo
  };

  const handleCancelarEdicion = () => {
    // Restauramos la tarea original
    if (tareaEditada) {
      setTareas(tareas.map(tarea => 
        tarea.id === editandoId ? tareaEditada : tarea
      ));
    }
    setEditandoId(null);
    setTareaEditada(null);
  };

  const handleEliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const handleInputChange = (e, id, campo) => {
    const { value } = e.target;
    setTareas(tareas.map(tarea => 
      tarea.id === id ? { ...tarea, [campo]: value } : tarea
    ));
  };

  const handleNuevaTareaChange = (e) => {
    const { name, value } = e.target;
    setNuevaTarea({ ...nuevaTarea, [name]: value });
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
        {/* Banner de bienvenida con efecto parallax */}
        <section 
          className="banner-bienvenida"
          style={{
            backgroundPosition: `${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%`
          }}
        >
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

        {/* Cuadro de tareas interactivo */}
        <section className="cuadro-tareas">
          <div className="tareas-header">
            <h2 className="titulo-tareas">Mis tareas de la semana</h2>
            <button 
              className="btn-agregar"
              onClick={() => setMostrarFormulario(!mostrarFormulario)}
            >
              <img src={AgregarIcon} alt="Agregar" className="icono-btn" />
              Agregar Tarea
            </button>
          </div>
          
          {/* Formulario para agregar nueva tarea */}
          {mostrarFormulario && (
            <div className="formulario-tarea">
              <h3>Nueva Tarea</h3>
              <div className="form-campos">
                <input
                  type="text"
                  name="tarea"
                  placeholder="Tarea"
                  value={nuevaTarea.tarea}
                  onChange={handleNuevaTareaChange}
                />
                <input
                  type="text"
                  name="espacio"
                  placeholder="Espacio"
                  value={nuevaTarea.espacio}
                  onChange={handleNuevaTareaChange}
                />
                <input
                  type="text"
                  name="proyecto"
                  placeholder="Proyecto"
                  value={nuevaTarea.proyecto}
                  onChange={handleNuevaTareaChange}
                />
                <input
                  type="text"
                  name="vence"
                  placeholder="Vence (dd/mm)"
                  value={nuevaTarea.vence}
                  onChange={handleNuevaTareaChange}
                />
                <select
                  name="estado"
                  value={nuevaTarea.estado}
                  onChange={handleNuevaTareaChange}
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="En progreso">En progreso</option>
                  <option value="En revision">En revisión</option>
                  <option value="Completada">Completada</option>
                </select>
                <select
                  name="prioridad"
                  value={nuevaTarea.prioridad}
                  onChange={handleNuevaTareaChange}
                >
                  <option value="Baja">Baja</option>
                  <option value="Media">Media</option>
                  <option value="Alta">Alta</option>
                  <option value="Urgente">Urgente</option>
                </select>
              </div>
              <div className="form-botones">
                <button className="btn-guardar" onClick={handleAgregarTarea}>
                  <img src={GuardarIcon} alt="Guardar" className="icono-btn" />
                  Guardar
                </button>
                <button className="btn-cancelar" onClick={() => setMostrarFormulario(false)}>
                  <img src={CancelarIcon} alt="Cancelar" className="icono-btn" />
                  Cancelar
                </button>
              </div>
            </div>
          )}
          
          <div className="contenedor-tabla">
            <table className="tabla-tareas">
              <thead>
                <tr className="tabs-tareas">
                  <th 
                    className={`tab-item ${activeTab === "Proximas" ? "active" : ""}`} 
                    colSpan="2" 
                    onClick={() => handleTabClick("Proximas")}
                  >
                    Próximas
                  </th>
                  <th 
                    className={`tab-item ${activeTab === "Atrasadas" ? "active" : ""}`} 
                    colSpan="2" 
                    onClick={() => handleTabClick("Atrasadas")}
                  >
                    Atrasadas
                  </th>
                  <th 
                    className={`tab-item ${activeTab === "Finalizadas" ? "active" : ""}`} 
                    colSpan="2" 
                    onClick={() => handleTabClick("Finalizadas")}
                  >
                    Finalizadas
                  </th>
                </tr>
                <tr className="encabezados-detallados">
                  <th>Tareas</th>
                  <th>Espacio</th>
                  <th>Proyecto</th>
                  <th>Vence</th>
                  <th>Estado</th>
                  <th>Prioridad</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {tareasFiltradas.map(tarea => (
                  <tr key={tarea.id}>
                    <td>
                      {editandoId === tarea.id ? (
                        <input
                          type="text"
                          value={tarea.tarea}
                          onChange={(e) => handleInputChange(e, tarea.id, 'tarea')}
                        />
                      ) : (
                        tarea.tarea
                      )}
                    </td>
                    <td>
                      {editandoId === tarea.id ? (
                        <input
                          type="text"
                          value={tarea.espacio}
                          onChange={(e) => handleInputChange(e, tarea.id, 'espacio')}
                        />
                      ) : (
                        tarea.espacio
                      )}
                    </td>
                    <td>
                      {editandoId === tarea.id ? (
                        <input
                          type="text"
                          value={tarea.proyecto}
                          onChange={(e) => handleInputChange(e, tarea.id, 'proyecto')}
                        />
                      ) : (
                        tarea.proyecto
                      )}
                    </td>
                    <td>
                      {editandoId === tarea.id ? (
                        <input
                          type="text"
                          value={tarea.vence}
                          onChange={(e) => handleInputChange(e, tarea.id, 'vence')}
                        />
                      ) : (
                        tarea.vence
                      )}
                    </td>
                    <td>
                      {editandoId === tarea.id ? (
                        <select
                          value={tarea.estado}
                          onChange={(e) => handleInputChange(e, tarea.id, 'estado')}
                        >
                          <option value="Pendiente">Pendiente</option>
                          <option value="En progreso">En progreso</option>
                          <option value="En revision">En revisión</option>
                          <option value="Completada">Completada</option>
                        </select>
                      ) : (
                        <span className={`badge estado-${tarea.estado.toLowerCase().replace(' ', '-')}`}>
                          {tarea.estado}
                        </span>
                      )}
                    </td>
                    <td>
                      {editandoId === tarea.id ? (
                        <select
                          value={tarea.prioridad}
                          onChange={(e) => handleInputChange(e, tarea.id, 'prioridad')}
                        >
                          <option value="Baja">Baja</option>
                          <option value="Media">Media</option>
                          <option value="Alta">Alta</option>
                          <option value="Urgente">Urgente</option>
                        </select>
                      ) : (
                        <span className={`badge prioridad-${tarea.prioridad.toLowerCase()}`}>
                          {tarea.prioridad}
                        </span>
                      )}
                    </td>
                    <td>
                      <div className="acciones-tarea">
                        {editandoId === tarea.id ? (
                          <>
                            <button 
                              className="btn-icon"
                              onClick={handleGuardarEdicion}
                            >
                              <img src={GuardarIcon2} alt="Guardar" />
                            </button>
                            <button 
                              className="btn-icon"
                              onClick={handleCancelarEdicion}
                            >
                              <img src={CancelarIcon2} alt="Cancelar" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button 
                              className="btn-icon"
                              onClick={() => handleEditarTarea(tarea.id)}
                            >
                              <img src={EditarTareaIcon} alt="Editar" />
                            </button>
                            <button 
                              className="btn-icon"
                              onClick={() => handleEliminarTarea(tarea.id)}
                            >
                              <img src={EliminarIcon} alt="Eliminar" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* Sección de próximas reuniones y bloc de notas */}
        <section className="reuniones-notas">
          {/* Próximas reuniones */}
          <div className="reuniones-card">
            <h2 className="titulo-reuniones">Próximas reuniones</h2>
            <div className="reunion-item">
              <h3 className="reunion-titulo">🧑‍💼 Reunión con PM</h3>
              <p>📅 Viernes, 27 de Junio</p>
              <p>⏰ 8:30 AM - 9:15 AM</p>
              <p>👥 4 participantes</p>
            </div>
            <div className="reunion-item">
              <h3 className="reunion-titulo">📝 Revisión Sprint 2</h3>
              <p>📅 Sábado, 28 de Junio</p>
              <p>⏰ 8:30 AM - 9:30 AM</p>
              <p>👥 3 participantes</p>
            </div>
          </div>

          {/* Bloc de notas personal */}
          <div className="notas-card">
            <div className="notas-header">
              <h2 className="titulo-notas">Bloc de notas personal</h2>
              <div className="notas-actions">
                <img 
                  src={HistorialIcon} 
                  alt="Historial" 
                  className="icono-nota" 
                  onClick={() => alert(JSON.stringify(historialNotas, null, 2))} 
                />
                <img 
                  src={AgregarNotaIcon} 
                  alt="Agregar Nota" 
                  className="icono-nota" 
                  onClick={handleAgregarNota} 
                />
              </div>
            </div>
            <textarea 
              className="notas-textarea" 
              value={nota}
              onChange={(e) => setNota(e.target.value)}
              placeholder="Escribe tus notas aquí..."
            ></textarea>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CapyDo;