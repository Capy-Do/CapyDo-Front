import React, { useState } from "react";
import "../styles/InicioSesion.css";
import logo from "../assets/logo.png"; // 👈 poné una imagen en src/assets

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", { email, password });
  };

  return (
    <div className="login-container">
      <img src={logo} alt="CapyDo Logo" />
      <h1>CapyDo</h1>
      <h2>¡Bienvenido!</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <p className="login-extra">
          <a href="/recuperar-contra">Olvidé mi contraseña</a>
        </p>

        <button type="submit" className="btn-login">
          Iniciar sesión
        </button>

        <button type="button" className="btn-google">
          <span>G</span> Sign in with Google
        </button>
      </form>

      <p className="register-text">
        ¿Todavía no tienes una cuenta?{" "}
        <a href="/registro">Regístrate</a>
      </p>
    </div>
  );
};

export default Login;
