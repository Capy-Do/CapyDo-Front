import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProject from "./pages/CreateProject";
import Login from "./pages/Login"; // agregué el login
import Register from "./pages/Register"; // Importo el registro

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal*/}
        <Route path="/" element={<CreateProject />} />
        
        {/* Ruta para el inicio de sesión */}
        <Route path="/login" element={<Login />} />

        {/* Ruta del registo */}
        <Route path="/registro" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
