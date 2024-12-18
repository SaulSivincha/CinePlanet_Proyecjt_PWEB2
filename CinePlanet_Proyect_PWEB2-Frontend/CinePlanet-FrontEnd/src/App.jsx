import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cines from './components/Cines';
import Peliculas from './components/Peliculas';
import Promociones from './components/Promociones';
import Dulceria from './components/Dulceria';
import Homepage from './components/homepage';
import Carrito from './components/Carrito';
import Socio from './components/Socio';
import FooterP1 from './components/FooterP1';
import FooterP2 from './components/FooterP2';
import Administrador from './components/Administrador';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Peliculas />} />
                <Route path="/cines" element={<Cines />} />
                <Route path="/peliculas" element={<Peliculas />} />
                <Route path="/promociones" element={<Promociones />} />
                <Route path="/dulceria" element={<Dulceria />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/socio" element={<Socio />} />
                <Route path="/administrador" element={<Administrador />} />
            </Routes>
            <FooterP1 />
            <FooterP2 />
        </Router>
    );
}

export default App;

