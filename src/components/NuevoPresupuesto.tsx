import React, { useState } from 'react';
import Mensaje from './Mensaje';

type Props = {
  presupuesto: number;
  setPresupuesto: React.Dispatch<React.SetStateAction<number>>;
};
const NuevoPresupuesto = ({ presupuesto, setPresupuesto }: Props) => {
  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje('Presupuesto invalido');
      return;
    }
    setMensaje('');
  };

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
          <label htmlFor=''>Definir presupuesto</label>
          <input
            type='text'
            className='nuevo-presupuesto'
            value={presupuesto}
            onChange={(e: any) => setPresupuesto(e.target.value)}
          />
        </div>
        <input type='submit' value='Añadir' />
        {mensaje && <Mensaje tipo={'error'} mensaje={mensaje}></Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
