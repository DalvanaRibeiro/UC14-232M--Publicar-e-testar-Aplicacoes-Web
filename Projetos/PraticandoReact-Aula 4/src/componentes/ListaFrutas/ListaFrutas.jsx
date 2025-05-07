import React from 'react';
import './ListaFrutas.css';

const ListaFrutas = () => {
  const frutas = ['Maçã', 'Banana', 'Uva'];

  return (
    <ul className="lista-frutas">
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
};

export default ListaFrutas;
