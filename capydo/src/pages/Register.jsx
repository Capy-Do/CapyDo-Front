// Componente de Registro para CapyDo
// - Valida email, contraseñas y aceptación de términos.
// - Sólo frontend: imprime en consola los datos para conectar luego con backend.

import React, { useState } from "react";
import "../styles/Registro.css";           // Estilos de esta pantalla
import logo from "../assets/logo.png";     // Asegurate de tener un logo en src/assets

const Register = () => {
  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [aceptaTyC, setAceptaTyC] = useState(false);

  // Estados para mostrar mensajes de error al “tocar” los campos
  const [touched, setTouched] = useState({
    nombre: false,
    email: false,
    password: false,
    confirm: false,
  });

  // Validaciones simples
  const emailValido = /^\S+@\S+\.\S+$/.test(email);
  const passLarga = password.length >= 8;
  const passCoincide = password === confirm;

  const formValido = nombre && emailValido && passLarga && passCoincide && aceptaTyC;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si algo no es válido, marcamos todos como "touched" para mostrar errores
    if (!formValido) {
      setTouched({ nombre: true, email: true, password: true, confirm: true });
      return;
    }

    // 👉 Acá conectarías con tu API/Backend
    console.log("Registro enviado:", { nombre, email, password });
    alert("¡Cuenta creada! (demo)");
  };

  return (
    <div className="register-container">
      {/* Encabezado */}
      <img src={logo} alt="CapyDo Logo" />
      <h1>CapyDo</h1>
      <h2>Crea tu cuenta</h2>

      {/* Formulario */}
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        {/* Nombre */}
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, nombre: true }))}
          required
          autoComplete="given-name"
          aria-label="Nombre"
        />
        {touched.nombre && !nombre && (
          <small className="error">Ingresá tu nombre.</small>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          required
          autoComplete="email"
          aria-label="Correo electrónico"
        />
        {touched.email && !emailValido && (
          <small className="error">Ingresá un correo válido.</small>
        )}

        {/* Contraseña */}
        <input
          type="password"
          placeholder="Contraseña (mínimo 8 caracteres)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, password: true }))}
          required
          autoComplete="new-password"
          aria-label="Contraseña"
        />
        {touched.password && !passLarga && (
          <small className="error">La contraseña debe tener al menos 8 caracteres.</small>
        )}

        {/* Confirmar contraseña */}
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, confirm: true }))}
          required
          autoComplete="new-password"
          aria-label="Confirmar contraseña"
        />
        {touched.confirm && !passCoincide && (
          <small className="error">Las contraseñas no coinciden.</small>
        )}

        {/* Términos y condiciones */}
        <label className="terms">
          <input
            type="checkbox"
            checked={aceptaTyC}
            onChange={(e) => setAceptaTyC(e.target.checked)}
          />
          <span>
            Acepto los <a href="/terminos" target="_blank" rel="noreferrer">Términos y Condiciones</a>
          </span>
        </label>
        {!aceptaTyC && touched.confirm && (
          <small className="error">Debés aceptar los Términos y Condiciones.</small>
        )}

        {/* Botón de Registrar */}
        <button type="submit" className="btn-register" disabled={!formValido}>
          Crear cuenta
        </button>

        {/* Link para ir al login si ya tiene cuenta */}
        <p className="register-extra">
          ¿Ya tenés una cuenta? <a href="/login">Iniciar sesión</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
