import React, { useState } from 'react';
import { Gasto } from '../App';
import CerrarBoton from '../assets/cerrar.svg';
import Mensaje from './Mensaje';

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  animarModal: boolean;
  setAnimarModal: React.Dispatch<React.SetStateAction<boolean>>;
  guardarGasto: (gasto: Gasto) => void;
};

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
}: Props) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState<number>();
  const [categoria, setCategoria] = useState('');
  const [mensaje, setMensaje] = useState('');

  const cerrarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 400);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son necesarios');
      return;
    }
    setMensaje('');
    guardarGasto({ nombre, cantidad, categoria });
  };

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CerrarBoton} alt='Boton Cerrar' onClick={cerrarModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
      >
        <legend>NUEVO GASTO</legend>
        {mensaje && <Mensaje tipo={'error'} mensaje={mensaje} />}
        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto</label>
          <input
            type='text'
            placeholder='Nombre del gasto'
            id='nombre'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input
            type='number'
            placeholder='Cantidad gastada'
            id='cantidad'
            value={cantidad || ''}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className='campo'>
          <label htmlFor='categoria'>Categoria</label>
          <select
            id='categoria'
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value=''>---</option>
            <option value='comida'>Comida</option>
            <option value='casa'>Casa</option>
            <option value='ocio'>Ocio</option>
            <option value='suscripciones'>Suscripciones</option>
            <option value='varios'>Gastos varios</option>
          </select>
        </div>
        <input type='submit' value='Añadir gasto' />
      </form>
    </div>
  );
};

export default Modal;
