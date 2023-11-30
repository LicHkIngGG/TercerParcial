import React from 'react'
import './styles/CardEjercicio.css'

const CardEjercicio = ({title, series, repetitions, imageUrl}) =>{
  return (
    <div className='tarjeta-de-ejercicio'>
        <img src = {imageUrl} alt={title} className='imagen-ejercicio' />
        <div className='ejercicio-info'>
            <h3 className='ejercicio-titulo'>{title}</h3>
            <p className='exercise-detail'>{series} series x {repetitions}
            repeticiones</p>
        </div>
        </div>
  );
  };
export default CardEjercicio;