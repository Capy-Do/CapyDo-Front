import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import CreateProject from './pages/CreateProject';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<div>Página Principal</div>} />
                <Route path="/dashboard" element={<div>Dashboard</div>} />
                <Route path="/projects" element={<CreateProject />} />
                <Route path="/calendar" element={<div>Calendario</div>} />
                <Route path="/profile" element={<div>Perfil</div>} />
            </Routes>
        </Router>
    );
} // <-- Esta llave faltaba

export default App;

