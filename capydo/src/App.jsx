import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProject from "./pages/CreateProject";
import Login from "./pages/Login"; // agregué el login

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal*/}
        <Route path="/" element={<CreateProject />} />
        
        {/* Nueva ruta para el inicio de sesión */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
