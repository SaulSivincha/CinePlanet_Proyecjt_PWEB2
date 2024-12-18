import React, { useState } from 'react';
import '../styles/Admi.css';
import FormPromociones from './FormPromociones';
import CineForm from './CineForm';
import FormFunsion from './CompPeliculas/FormFunsion';
import EliminarFunsion from './CompPeliculas/EliminarFunsion';
import DulceriaForm from './DulceriaForm';

function Admi() {
  const [active, setActive] = useState('Cineplanet');

  return (
    <div>  
     <FormPromociones />
     <FormFunsion/>
     <EliminarFunsion/>
     <DulceriaForm /> 
     <CineForm />
    </div>
    );
};

export default Admi;
