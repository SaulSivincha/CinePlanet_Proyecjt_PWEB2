import React, { useState } from 'react';
import '../styles/Admi.css';
import FormPromociones from './FormPromociones';
import CineForm from './CineForm';
function Admi() {
  const [active, setActive] = useState('Cineplanet');

  return (
    <div>  
     <FormPromociones /> 
     <CineForm />
    </div>
    );
};

export default Admi;
