import React from 'react';
import '/Menu.css';

function Menu({ onSelecionar }) {
  return (
    <div className="menu">
      <div className="balao">
        <strong>O que você quer saber sobre a Energia Z?</strong>
      </div>
      <div className="opcoes">
        <button onClick={() => onSelecionar(1)}>1. O que é Energia Z?</button>
        <button onClick={() => onSelecionar(2)}>2. Quais são os tipos?</button>
        <button onClick={() => onSelecionar(3)}>3. Quem vence quem?</button>
        <button onClick={() => onSelecionar("quiz")}>4. Quiz</button>
      </div>
    </div>
  );
}

export default Menu;
