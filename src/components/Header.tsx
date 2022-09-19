import React from 'react';
import NuevoPresupuesto from './NuevoPresupuesto';

type Props = {
  presupuesto: number;
  setPresupuesto: React.Dispatch<React.SetStateAction<number>>;
};
const Header = ({ presupuesto, setPresupuesto }: Props) => {
  return (
    <header>
      <h1>Planificador de presupuestos</h1>
      <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
    </header>
  );
};

export default Header;
