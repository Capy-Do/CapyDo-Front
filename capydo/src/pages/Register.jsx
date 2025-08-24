export default function Register() {
  return (
    <div className="card">
      <h2>Registro</h2>
      <form className="form">
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Confirmar contraseña" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
