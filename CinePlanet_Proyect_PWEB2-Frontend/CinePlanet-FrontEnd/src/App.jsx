import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cines from './components/Cines';
import Peliculas from './components/Peliculas';
import Promociones from './components/Promociones';
import Dulceria from './components/Dulceria';
import Homepage from './components/homepage';
import Carrito from './components/Carrito';

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
            </Routes>
        </Router>
    );
}

export default App;

