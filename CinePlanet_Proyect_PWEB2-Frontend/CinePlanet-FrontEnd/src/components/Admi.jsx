import React, { useState } from 'react';
import '../styles/Admi.css';
import FormPromociones from './FormPromociones';
import CineForm from './CineForm';
import DulceriaForm from './DulceriaForm';

function Admi() {
  const [active, setActive] = useState('Cineplanet');

  return (
    <div>  
     <FormPromociones />
     <DulceriaForm /> 
     <CineForm />
    </div>
    );
};

export default Admi;
