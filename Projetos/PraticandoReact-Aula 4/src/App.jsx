import React from 'react';
import './App.css';

// Importa todos os componentes
import Titulo from './componentes/Titulo/Titulo';
import Paragrafo from './componentes/Paragrafo/Paragrafo';
import Imagem from './componentes/Imagem/Imagem';
import ListaFrutas from './componentes/ListaFrutas/ListaFrutas';
import Botao from './componentes/Botao/Botao';

function App() {
  const nomeUsuario = 'Maria';

  return (
    <div className="App">
      <Titulo nome={nomeUsuario} />
      <Paragrafo />
      <Imagem />
      <ListaFrutas />
      <Botao />
    </div>
  );
}

export default App;
