import React from 'react';
import CineCard from './CineCard';
import './CinePage.css';

const sedes = [
  { nombre: 'Paucarpata', direccion: 'Av. Principal 123, Paucarpata', imagen: 'https://cdnpe.cineplanet.com.pe/assets/77a68319-ab16-4888-b287-7a8235d6fb52' },
  { nombre: 'Cayma', direccion: 'Calle Secundaria 456, Cayma', imagen: 'https://cdnpe.cineplanet.com.pe/assets/92264a76-78f6-44ad-b1c4-291a0f9d87dd' },
  { nombre: 'Cerro Colorado', direccion: 'Boulevard 789, Cerro Colorado', imagen: 'https://cdnpe.cineplanet.com.pe/assets/93f48567-0768-4837-982b-3ffc23a4ed07' },
  { nombre: 'Yanahuara', direccion: 'Carretera 101, Yanahuara', imagen: 'https://cdnpe.cineplanet.com.pe/assets/53d13688-8a99-4eb5-a887-c963ac4d1f43' },
  { nombre: 'Miraflores', direccion: 'Plaza Central, Miraflores', imagen: 'https://cdnpe.cineplanet.com.pe/assets/39a913aa-e8a7-4c46-8378-b926c6a79096' },
  { nombre: 'José Luis Bustamante y Rivero', direccion: 'Centro Histórico, José Luis Bustamante y Rivero', imagen: 'https://cdnpe.cineplanet.com.pe/assets/d42744e1-44d1-4a3b-99cf-03a390b90789' },
  { nombre: 'Hunter', direccion: 'Zona Comercial, Hunter', imagen: 'https://cdnpe.cineplanet.com.pe/assets/53d13688-8a99-4eb5-a887-c963ac4d1f43' },
  { nombre: 'Mariano Melgar', direccion: 'Zona Campestre, Mariano Melgar', imagen: 'https://cdnpe.cineplanet.com.pe/assets/77a68319-ab16-4888-b287-7a8235d6fb52' },
  { nombre: 'Sachaca', direccion: 'Plaza 123, Sachaca', imagen: 'https://cdnpe.cineplanet.com.pe/assets/93f48567-0768-4837-982b-3ffc23a4ed07' },
  { nombre: 'Alto Selva Alegre', direccion: 'Calle Principal 456, Alto Selva Alegre', imagen: 'https://cdnpe.cineplanet.com.pe/assets/1c01e525-5b36-45b9-839b-9b5dee84ef9c' },
  { nombre: 'Characato', direccion: 'Zona 789, Characato', imagen: 'https://cdnpe.cineplanet.com.pe/assets/f860457a-a2cf-4024-897d-487ff95fe8f4' },
  { nombre: 'Cerro Colorado', direccion: 'Av. Futuro, Cerro Colorado', imagen: 'https://cdnpe.cineplanet.com.pe/assets/8e49f845-7ed8-47a2-9d0f-2c6c36144788' },
];


function CinePage() {
  return (
    <div>
      <h1 className="title">Nuestras Sedes</h1>
      <div className="cine-grid">
        {sedes.map((sede, index) => (
          <CineCard
            key={index}
            nombre={sede.nombre}
            direccion={sede.direccion}
            imagen={sede.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default CinePage;
