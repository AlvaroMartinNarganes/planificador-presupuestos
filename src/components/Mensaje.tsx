import React from 'react';
import PropTypes from 'prop-types';
type Props = {
  mensaje: string;
  tipo: string;
};

const Mensaje = ({ mensaje, tipo }: Props) => {
  return <div className={`alerta ${tipo}`}>{mensaje}</div>;
};

Mensaje.propTypes = {};

export default Mensaje;
