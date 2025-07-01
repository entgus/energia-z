import React, { useState } from 'react';
import Menu from './components/Menu';
import Personagem from './components/Personagem';
import Conteudo from './components/Conteudo';
import Quiz from './components/Quiz'; // ⬅️ importe o quiz
import './App.css';

function App() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  function voltarAoMenu() {
    setOpcaoSelecionada(null);
  }

  return (
    <div className="container-principal">
      <div className="lado-esquerdo">
        {opcaoSelecionada === null && <Menu onSelecionar={setOpcaoSelecionada} />}
        {typeof opcaoSelecionada === 'number' && (
          <Conteudo opcao={opcaoSelecionada} onVoltar={voltarAoMenu} />
        )}
        {opcaoSelecionada === 'quiz' && <Quiz onVoltar={voltarAoMenu} />}
      </div>
      <div className="lado-direito">
        <Personagem />
      </div>
    </div>
  );
}

export default App;
