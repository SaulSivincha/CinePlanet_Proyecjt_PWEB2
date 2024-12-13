import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CinePage from './components/CinePage.jsx';
import LoginPage from './components/LoginPage.jsx';
import DulceriaPage from './components/DulceriaPage.jsx';
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
    </Router>
  );
}

export default App;
