import React from 'react';
import CreateProject from './pages/CreateProject';
import Home from '../src/components/Home';
import Perfil from './components/Perfil';
import PersonalizarPerfil from './components/PersonalizarPerfil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Home />
      <CreateProject />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Perfil />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/personalizar-perfil" element={<PersonalizarPerfil />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;