import React from 'react';
import './Titulo.css';

// Componente de título principal da página
const Titulo = ({ nome }) => {
  return <h1 className="titulo">Bem-vindo(a), {nome}!</h1>;
};

export default Titulo;
