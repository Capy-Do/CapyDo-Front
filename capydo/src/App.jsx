import { useState } from 'react';
import Register from './pages/Register';
import Settings from './pages/Settings';


function App() {
  const [view, setView] = useState('register'); // estado inicial

  return (
    <div>
      <header style={{ padding: '1rem', background: '#1F2937', color: '#F9FAFB' }}>
        <button onClick={() => setView('register')} style={buttonStyle}>
          Registro
        </button>
        <button onClick={() => setView('settings')} style={buttonStyle}>
          Configuración
        </button>
      </header>

      <main style={{ padding: '2rem' }}>
        {view === 'register' && <Register />}
        {view === 'settings' && <Settings />}
      </main>
    </div>
  );
}

const buttonStyle = {
  marginRight: '1rem',
  padding: '0.6rem 1rem',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  background: '#60A5FA',
  color: '#111827',
  fontWeight: 'bold',
};

export default App;
