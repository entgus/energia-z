import React from 'react';

function Conteudo({ opcao, onVoltar }) {
  if (!opcao) return null;

  const conteudos = {
    1: (
      <div>
        <h2>O que é Energia Z?</h2>
        <p>
          Esta é a energia vinda de uma ligação gêmea com o Mundo Z. A teoria é que existe uma cópia deste mundo — 
          feita completamente de energia. Assim como tudo aqui possui um reflexo lá, nós também temos cópias: os <strong>doppelgangers</strong>.
        </p>
        <p>
          Deles vem nosso poder e nossa aura. A maioria das pessoas consegue acessar até 10% do poder de seu doppel.
          Quem passa disso é considerado um “deus”. Mas não se enganem — isso é só a primeira barreira.
        </p>
        <p>
          Quando alguém suga a energia de outro ser, o seu doppel também suga o doppel do outro. Isso permite usar a energia
          de forma mais ampla, mas trava sua evolução. Para avançar, é necessário realizar rituais.
        </p>
        <ul>
          <li><strong>Até 10%</strong> — Seres comuns</li>
          <li><strong>Até 30%</strong> — Deuses (com ritual de conexão com o doppel)</li>
          <li><strong>Até 60%</strong> — Duplos (com pacto de cooperação)</li>
          <li><strong>Até 90%</strong> — Decrepitos (escravizam o doppel)</li>
          <li><strong>100%</strong> — Doppels (rendem-se completamente; poder absoluto, mas sem sanidade)</li>
        </ul>
        <p>
          A conexão traz refinamento, afinidade e o despertar de um tipo de poder único. Mas cuidado: quanto mais profundo
          for o elo, mais você se distancia da humanidade.
        </p>
      </div>
    ),

   2: (
      <div>
        <h2>🧬 Tipos de Energia Z</h2>

        <h3>1. Egos (Auto-Modificadores)</h3>
        <ul>
          <li>🧠 <strong>Poder:</strong> Modificam o próprio corpo.</li>
          <li>💥 <strong>Usos:</strong> Força física, mutações, armas corporais, transformação elemental parcial.</li>
          <li>🌀 <strong>Vantagem:</strong> Autossuficiência total, imprevisíveis no corpo a corpo.</li>
          <li>🛡️ <strong>Limitação:</strong> Não podem afetar o ambiente nem outros diretamente.</li>
        </ul>

        <h3>2. Alquimistas (Transmutadores de Matéria)</h3>
        <ul>
          <li>🧠 <strong>Poder:</strong> Alteram a matéria que tocam, com troca equivalente.</li>
          <li>💥 <strong>Usos:</strong> Transformar terreno, objetos, organismos vivos.</li>
          <li>🌀 <strong>Vantagem:</strong> Controle de ambiente e estratégia complexa.</li>
          <li>🛡️ <strong>Limitação:</strong> Requer “pagamento” e toque direto.</li>
        </ul>

        <h3>3. Ones (Anômalos)</h3>
        <ul>
          <li>🧠 <strong>Poder:</strong> Realizam feitos surreais, guiados pela própria crença.</li>
          <li>💥 <strong>Usos:</strong> Leis da física irrelevantes, mas sempre ligados a delírio ou crença intensa.</li>
          <li>🌀 <strong>Vantagem:</strong> Potencialmente ilimitados.</li>
          <li>🛡️ <strong>Limitação:</strong> Instáveis, dependem de foco absoluto; pouco versáteis.</li>
        </ul>

        <h3>4. Modificadores (Manipuladores de Energia)</h3>
        <ul>
          <li>🧠 <strong>Poder:</strong> Transmutam e lançam energia como quiserem (raio, fogo, toxina, etc).</li>
          <li>💥 <strong>Usos:</strong> Ataques diretos e variados com grande alcance e forma.</li>
          <li>🌀 <strong>Vantagem:</strong> Adaptabilidade ofensiva, alcance e velocidade.</li>
          <li>🛡️ <strong>Limitação:</strong> Gastam muita energia, fracos em defesa e corpo a corpo.</li>
        </ul>

        <h3>5. Armeiros (Criadores de Armas e Ferramentas)</h3>
        <ul>
          <li>🧠 <strong>Poder:</strong> Criam armas e objetos únicos com propriedades especiais.</li>
          <li>💥 <strong>Usos:</strong> Espadas vivas, escudos gravitacionais, armas bio-orgânicas.</li>
          <li>🌀 <strong>Vantagem:</strong> Ferramentas permanentes, especialização extrema.</li>
          <li>🛡️ <strong>Limitação:</strong> Limitados à arma principal e tempo de criação.</li>
        </ul>

        <h3>6. Invocadores (Conjuradores de Entidades)</h3>
        <ul>
          <li>🧠 <strong>Poder:</strong> Invocam seres vivos com habilidades únicas.</li>
          <li>💥 <strong>Usos:</strong> Companheiros táticos, distrações, combate indireto.</li>
          <li>🌀 <strong>Vantagem:</strong> Versatilidade, múltiplas funções em campo.</li>
          <li>🛡️ <strong>Limitação:</strong> Dependem de terceiros para agir, vulneráveis sozinhos.</li>
        </ul>
      </div>
    ),
    
    3: (
  <div>
    <h2>⚔️ Diagrama de Combate entre Arquétipos</h2>
    <p><em>(Baseado em psicologia + estilo de poder)</em></p>

    <hr />
    <h3>✅ 1. Egos → são fortes contra Modificadores</h3>
    <ul>
      <li>🧠 <strong>Psicológico:</strong> Egos são focados e objetivos, enquanto Modificadores são teatrais e provocadores — o Ego simplesmente ignora isso.</li>
      <li>⚔️ <strong>Combate:</strong> O Ego resiste bem a ataques diretos, fecha distância e derruba o Modificador antes que ele consiga variar ataques.</li>
    </ul>

    <hr />
    <h3>✅ 2. Modificadores → são fortes contra Armeiros</h3>
    <ul>
      <li>🧠 <strong>Psicológico:</strong> Armeiros são metódicos e se apegam às criações. Modificadores são provocadores e imprevisíveis.</li>
      <li>⚔️ <strong>Combate:</strong> Usam ataques rápidos e à distância que desestabilizam o foco e destroem armas antes de serem usadas totalmente.</li>
    </ul>

    <hr />
    <h3>✅ 3. Armeiros → são fortes contra Invocadores</h3>
    <ul>
      <li>🧠 <strong>Psicológico:</strong> Invocadores confiam em vínculos e apoio. Armeiros são solitários e letais — rompem esses vínculos com precisão.</li>
      <li>⚔️ <strong>Combate:</strong> Criam armas ou armadilhas que neutralizam vários inimigos e atingem pontos fracos dos invocados.</li>
    </ul>

    <hr />
    <h3>✅ 4. Invocadores → são fortes contra Alquimistas</h3>
    <ul>
      <li>🧠 <strong>Psicológico:</strong> Alquimistas são estratégicos e estruturados. Invocadores quebram esse padrão com imprevisibilidade em grupo.</li>
      <li>⚔️ <strong>Combate:</strong> A variedade de aliados e ataques simultâneos sobrecarrega a leitura cautelosa do Alquimista.</li>
    </ul>

    <hr />
    <h3>✅ 5. Alquimistas → são fortes contra Ones</h3>
    <ul>
      <li>🧠 <strong>Psicológico:</strong> Ones são caóticos e guiados por delírios. Alquimistas são frios e manipuladores — sabem como desmontar suas crenças.</li>
      <li>⚔️ <strong>Combate:</strong> Usam lógica e troca equivalente para criar contramedidas exatas aos absurdos dos Ones.</li>
    </ul>

    <hr />
    <h3>✅ 6. Ones → são fortes contra Egos</h3>
    <ul>
      <li>🧠 <strong>Psicológico:</strong> Egos são diretos e racionais. Ones quebram essa lógica com absurdos que confundem e desestabilizam.</li>
      <li>⚔️ <strong>Combate:</strong> Seus poderes quebram as regras que os Egos seguem — isso os deixa vulneráveis e sem controle da situação.</li>
    </ul>
  </div>
),

    4: (
      <div>
        <h2>Quiz</h2>
        <p>Descubra seus tipos!</p>
        {/* Quiz component can be added here */}
      </div>
    ),
  };

  return (
    <div className="conteudo">
      {conteudos[opcao]}
      <button className="voltar" onClick={onVoltar}>← Voltar ao menu</button>
    </div>
  );
}

export default Conteudo;

