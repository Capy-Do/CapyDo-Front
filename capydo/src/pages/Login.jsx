// Importamos React y el hook useState para manejar estados (inputs del formulario)
import React, { useState } from "react";

// Importamos el archivo de estilos CSS para este componente
import "../styles/InicioSesion.css";

// Importamos el logo desde la carpeta de assets
import logo from "../assets/logo.png"; 

// Definimos el componente Login como función
const Login = () => {
  // Estados locales: guardan lo que escribe el usuario en los inputs
  const [email, setEmail] = useState("");      // Estado para el correo
  const [password, setPassword] = useState(""); // Estado para la contraseña

  // Función que se ejecuta cuando el usuario hace "submit" al formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene que la página se recargue
    console.log("Datos enviados:", { email, password }); // Muestra los datos en consola
    // 👉 acá en el futuro podés conectar el backend para loguear al usuario
  };

  // Renderizado del componente
  return (
    <div className="login-container"> {/* Contenedor principal */}
      
      {/* Logo de la aplicación */}
      <img src={logo} alt="CapyDo Logo" />

      {/* Título de la app */}
      <h1>CapyDo</h1>

      {/* Subtítulo de bienvenida */}
      <h2>¡Bienvenido!</h2>

      {/* Formulario */}
      <form className="login-form" onSubmit={handleSubmit}>
        
        {/* Input para correo electrónico */}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email} // valor actual del estado email
          onChange={(e) => setEmail(e.target.value)} // actualiza el estado email
          required // campo obligatorio
        />

        {/* Input para contraseña */}
        <input
          type="password"
          placeholder="Contraseña"
          value={password} // valor actual del estado password
          onChange={(e) => setPassword(e.target.value)} // actualiza el estado password
          required // campo obligatorio
        />

        {/* Enlace para recuperar contraseña */}
        <p className="login-extra">
          <a href="/recuperar-contra">Olvidé mi contraseña</a>
        </p>

        {/* Botón para enviar formulario (iniciar sesión) */}
        <button type="submit" className="btn-login">
          Iniciar sesión
        </button>

        {/* Botón alternativo para iniciar sesión con Google */}
        <button type="button" className="btn-google">
          <span>G</span> Sign in with Google
        </button>
      </form>

      {/* Texto final con enlace a registro */}
      <p className="register-text">
        ¿Todavía no tienes una cuenta?{" "}
        <a href="/registro">Regístrate</a>
      </p>
    </div>
  );
};

// Exportamos el componente para poder usarlo en otras partes del proyecto
export default Login;
