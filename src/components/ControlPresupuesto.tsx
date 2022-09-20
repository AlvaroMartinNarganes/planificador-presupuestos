import React from 'react';

type Props = {
  presupuesto: number;
};
const ControlPresupuesto = ({ presupuesto }: Props) => {
  //Convertir numero a euro
  const formatearPresupuesto = (presupuesto: number) => {
    return presupuesto.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR',
    });
  };

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Futuro Grafico</p>
      </div>
      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto: </span> {formatearPresupuesto(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span> {formatearPresupuesto(presupuesto)}
        </p>
        <p>
          <span>Gastado: </span> {formatearPresupuesto(presupuesto)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
