// capydo/src/pages/RecuperarContra.jsx
// Vista para que el usuario solicite el envío de un link para recuperar su contraseña.
// Frontend solamente: el endpoint /api/auth/forgot-password es un ejemplo y debe existir en tu backend.

import React, { useState } from "react";
import "../styles/Recuperar.css";          // estilos específicos para esta pantalla
import logo from "../assets/logo.png";     // poné una imagen en src/assets/logo.png (si no la tenés, podés quitar esta línea)

const RecuperarContra = () => {
  // estado del input del email
  const [email, setEmail] = useState("");
  // estado para el flujo (null | 'loading' | 'success' | 'error')
  const [status, setStatus] = useState(null);
  // mensaje de error a mostrar
  const [error, setError] = useState("");

  // manejador del submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // validación sencilla del email en frontend
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Ingresá un correo válido.");
      return;
    }

    setStatus("loading");

    try {
      // Ejemplo de POST al backend. Adaptalo a la URL real de vuestra API.
      // Debe devolver 200/201 si se envió el mail correctamente.
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      // Si la respuesta no es OK, tomamos el mensaje para mostrar
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Error en el servidor");
      }

      // éxito
      setStatus("success");
    } catch (err) {
      // error de red o del servidor
      setStatus("error");
      setError(err.message || "No se pudo enviar el correo. Intentá más tarde.");
    }
  };

  return (
    <div className="recover-container" role="main">
      {/* Logo (opcional) */}
      <img src={logo} alt="CapyDo Logo" />

      {/* Títulos */}
      <h1>Recuperar contraseña</h1>
      <p className="recover-desc">
        Ingresá el correo asociado a tu cuenta. Te vamos a enviar un código para restablecer la contraseña.
      </p>

      {/* Formulario */}
      <form className="recover-form" onSubmit={handleSubmit} aria-label="Formulario de recuperación de contraseña" noValidate>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Correo electrónico"
        />

        {/* Mensaje de error de validación */}
        {error && <small className="error">{error}</small>}

        {/* Botón de envío */}
        <button type="submit" className="btn-recover" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Enviar código de recuperación"}
        </button>

        {/* Mensajes de estado */}
        {status === "success" && (
          <p className="success">Mail enviado. Revisá tu bandeja (y la carpeta Spam).</p>
        )}

        {status === "error" && <p className="error">Ocurrió un error. {error}</p>}
      </form>

      {/* Enlace de vuelta al login */}
      <p className="back-text">
        ¿Recordaste tu contraseña? <a href="/login">Iniciar sesión</a>
      </p>
    </div>
  );
};

export default RecuperarContra;
