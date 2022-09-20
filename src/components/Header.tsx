import React from 'react';
import ControlPresupuesto from './ControlPresupuesto';
import NuevoPresupuesto from './NuevoPresupuesto';

type Props = {
  presupuesto: number;
  setPresupuesto: React.Dispatch<React.SetStateAction<number>>;
  isValidPresupuesto: boolean;
  setIsValidPresupuesto: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}: Props) => {
  return (
    <header>
      <h1>Planificador de presupuestos</h1>
      {isValidPresupuesto ? (
        <ControlPresupuesto presupuesto={presupuesto} />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
