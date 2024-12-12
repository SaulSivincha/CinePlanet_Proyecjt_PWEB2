import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CinePage from './components/CinePage';
import LoginPage from './components/LoginPage';
import DulceriaPage from './components/DulceriaPage';
import './App.css';

function App() {
  return (
    <Router>
      <header className="header">
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/cines">Cines</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dulceria">Dulcería</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/cines" element={<CinePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dulceria" element={<DulceriaPage />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© 2024 Nuestras Sedes. Todos los derechos reservados.</p>
      </footer>
    </Router>
  );
}

export default App;
