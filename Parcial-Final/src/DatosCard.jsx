import React from 'react'
import CardEjercicio from './CardEjercicio'
import DataEjercicio from './DataEjercicio.js';

const DatosCard = () => {
  return (
    <div>
      {DataEjercicio.map((ejercicio) => (
        <CardEjercicio 
          key={ejercicio.id}
          title={ejercicio.title}
          series={ejercicio.series}
          repetitions={ejercicio.repetitions}
          imageUrl={ejercicio.imageUrl}
        />
      ))}
    </div>
  );
};
export default DatosCard;