import React, { useState } from 'react';
import '../styles/Admi.css';
import FormPromociones from './FormPromociones';
function Admi() {
  const [active, setActive] = useState('Cineplanet');

  return (
    <div>  
     <FormPromociones /> 
    </div>
    );
};

export default Admi;
