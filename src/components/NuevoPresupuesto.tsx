import React, { useState } from 'react';
import Mensaje from './Mensaje';

type Props = {
  presupuesto: number;
  setPresupuesto: React.Dispatch<React.SetStateAction<number>>;
  isValidPresupuesto: boolean;
  setIsValidPresupuesto: React.Dispatch<React.SetStateAction<boolean>>;
};

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}: Props) => {
  const [mensaje, setMensaje] = useState('');

  //Validar presupuesto
  const handlePresupuesto = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    //No valido
    if (!presupuesto || Number(presupuesto) < 0) {
      setMensaje('Presupuesto invalido');
      return;
    }
    //Valido
    setMensaje('');
    setIsValidPresupuesto(true);
  };

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
          <label htmlFor=''>Definir presupuesto</label>
          <input
            type='number'
            className='nuevo-presupuesto'
            value={presupuesto}
            onChange={(e: any) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type='submit' value='Añadir' />
        {mensaje && <Mensaje tipo={'error'} mensaje={mensaje}></Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
