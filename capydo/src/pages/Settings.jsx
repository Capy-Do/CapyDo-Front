export default function Config() { //componente configuración
  return (
    <div className="config-container">
      <h2 className="config-title">Configuración</h2> {/*titulo*/}

      <div className="config-section">  {/*perfil*/}
        <h3>Perfil</h3>
        <label className="config-label">Nombre de usuario</label>  {/* label para el campo de nombre de usuario */}
        {/* Input para ingresar el nombre */}
        <input className="config-input" type="text" placeholder="Tu nombre" />
      </div>

      <div className="config-section">  {/*notificaciones*/}
        <h3>Notificaciones</h3>
        <div className="config-toggle"> {/* Interruptor toggle para activar/desactivar recibir emails */}
          <div
            className="toggle-switch"
            onClick={(e) => e.currentTarget.classList.toggle('active')} // Al hacer clic cambia la clase 'active' para simular encendido/apagado
          />
          <span>Recibir emails</span>
        </div>
      </div>

      <div className="config-section">  {/* Sección de preferencias */}
        <h3>Preferencias</h3>
        <label className="config-label">Idioma</label>  {/* Label para seleccionar idioma */}

        {/*para elegir idioma */}
        <select className="config-input">
          <option>Español</option>
          <option>Inglés</option>
        </select>
      </div>
             {/*botón de guardar los cambios*/}
      <button className="config-button">Guardar cambios</button>
    </div>
  );
}
