import React, { useState } from 'react';

const perguntas = [
  {
    texto: "1. Que tipo de lugar te atrai mais em um dia livre?",
    alternativas: [
      { texto: "Uma oficina onde você pode mexer nas suas criações.", pontua: ["Armeiros", "Alquimistas"] },
      { texto: "Um parque movimentado onde tudo está em mudança.", pontua: ["Modificadores", "Invocadores"] },
      { texto: "Um café tranquilo, com espaço para pensar.", pontua: ["Egos", "Alquimistas"] },
      { texto: "Uma festa onde tudo pode acontecer.", pontua: ["Ones", "Modificadores"] },
      { texto: "Uma praça onde as pessoas se reúnem naturalmente.", pontua: ["Invocadores", "Egos"] },
    ]
  },
  {
    texto: "2. Em uma equipe de missão, seu papel seria...",
    alternativas: [
      { texto: "Construir ferramentas e soluções antes de partir.", pontua: ["Armeiros", "Egos"] },
      { texto: "Unir os membros e motivar o grupo.", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Criar estratégias de abordagem e fuga.", pontua: ["Alquimistas", "Invocadores"] },
      { texto: "Atuar como distração ou fator surpresa.", pontua: ["Modificadores", "Ones"] },
      { texto: "Entrar em silêncio e resolver direto.", pontua: ["Egos", "Ones"] },
    ]
  },
  {
    texto: "3. Qual dessas ações seria mais comum pra você durante um desafio?",
    alternativas: [
      { texto: "Ficar observando e calculando possibilidades.", pontua: ["Alquimistas", "Egos"] },
      { texto: "Motivar os outros a não desistirem.", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Agir por impulso e ver onde dá.", pontua: ["Ones", "Modificadores"] },
      { texto: "Criar uma ferramenta ou método próprio.", pontua: ["Armeiros", "Alquimistas"] },
      { texto: "Focar no objetivo e ignorar distrações.", pontua: ["Egos", "Ones"] },
    ]
  },
  {
    texto: "4. Como você costuma lidar com conflitos em grupo?",
    alternativas: [
      { texto: "Muda o clima com humor ou provocações leves.", pontua: ["Modificadores", "Ones"] },
      { texto: "Propõe uma solução prática para encerrar logo.", pontua: ["Egos", "Armeiros"] },
      { texto: "Observa em silêncio e intervém com algo calculado.", pontua: ["Alquimistas", "Egos"] },
      { texto: "Tenta reconectar os envolvidos e criar entendimento.", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Se afasta pra criar algo que resolva tudo depois.", pontua: ["Armeiros", "Invocadores"] },
    ]
  },
  {
    texto: "5. Se você tivesse que enfrentar um monstro, como agiria?",
    alternativas: [
      { texto: "Transformaria o cenário para vencer.", pontua: ["Alquimistas", "Modificadores"] },
      { texto: "Chamaria aliados com habilidades específicas.", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Atacaria direto com o que tem nas mãos.", pontua: ["Egos", "Armeiros"] },
      { texto: "Faria algo absurdo que ninguém espera.", pontua: ["Ones", "Modificadores"] },
      { texto: "Criaria um objeto especial só pra isso.", pontua: ["Armeiros", "Ones"] },
    ]
  },
  {
    texto: "6. Em uma cidade nova, você se comporta como?",
    alternativas: [
      { texto: "Se adapta rápido e começa a agir naturalmente.", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Fica na sua até entender bem o lugar.", pontua: ["Egos", "Alquimistas"] },
      { texto: "Testa os limites sociais só por curiosidade.", pontua: ["Ones", "Modificadores"] },
      { texto: "Encontra um espaço isolado pra trabalhar sozinho.", pontua: ["Armeiros", "Egos"] },
      { texto: "Cria conexões e entende a dinâmica local.", pontua: ["Invocadores", "Alquimistas"] },
    ]
  },
  {
    texto: "7. Como você se comporta quando tudo dá errado?",
    alternativas: [
      { texto: "Assume o controle e muda o plano.", pontua: ["Modificadores", "Armeiros"] },
      { texto: "Tenta manter todos calmos e juntos.", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Rasga as regras e tenta algo caótico.", pontua: ["Ones", "Modificadores"] },
      { texto: "Fica quieto e resolve o que der sozinho.", pontua: ["Egos", "Armeiros"] },
      { texto: "Procura entender o que causou tudo isso.", pontua: ["Alquimistas", "Ones"] },
    ]
  },
  {
    texto: "8. Quando tem tempo livre, você costuma...",
    alternativas: [
      { texto: "Criar algo do zero com as próprias mãos.", pontua: ["Armeiros", "Ones"] },
      { texto: "Pensar em estratégias e estudar o mundo ao redor.", pontua: ["Alquimistas", "Egos"] },
      { texto: "Interagir com os outros e sentir a energia do momento.", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Fazer algo totalmente novo só por diversão.", pontua: ["Modificadores", "Ones"] },
      { texto: "Desaparecer um tempo e voltar com algo pronto.", pontua: ["Egos", "Armeiros"] },
    ]
  },
  {
    texto: "9. Se você ganhasse um poder, o que preferiria?",
    alternativas: [
      { texto: "Mudar seu próprio corpo como quisesse.", pontua: ["Egos", "Modificadores"] },
      { texto: "Invocar aliados com diferentes habilidades.", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Transformar objetos e lugares à sua vontade.", pontua: ["Alquimistas", "Armeiros"] },
      { texto: "Criar armas ou equipamentos únicos.", pontua: ["Armeiros", "Ones"] },
      { texto: "Usar energia de formas inesperadas e caóticas.", pontua: ["Ones", "Modificadores"] },
    ]
  },
  {
    texto: "10. O que mais irrita você em uma batalha?",
    alternativas: [
      { texto: "Incapacidade de controlar o ambiente.", pontua: ["Alquimistas", "Modificadores"] },
      { texto: "Pessoas que não cooperam com o grupo.", pontua: ["Invocadores", "Egos"] },
      { texto: "Ter que seguir ordens irracionais.", pontua: ["Ones", "Armeiros"] },
      { texto: "Ser impedido de terminar o que começou.", pontua: ["Armeiros", "Egos"] },
      { texto: "Falta de criatividade nas soluções.", pontua: ["Modificadores", "Ones"] },
    ]
  }
  ,
  {
    texto: "11. Em uma viagem longa, o que você prefere fazer?",
    alternativas: [
      { texto: "Observar tudo pela janela e imaginar histórias.", pontua: ["Ones", "Alquimistas"] },
      { texto: "Organizar os caminhos e possíveis paradas.", pontua: ["Armeiros", "Alquimistas"] },
      { texto: "Conversar com quem estiver por perto.", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Ficar quieto e pronto pra reagir se algo acontecer.", pontua: ["Egos", "Invocadores"] },
      { texto: "Criar confusão só pra ver o que muda no clima.", pontua: ["Modificadores", "Ones"] }
    ]
  },
  {
    texto: "12. Como você se prepara para algo desconhecido?",
    alternativas: [
      { texto: "Confio no que sinto e improviso.", pontua: ["Ones", "Modificadores"] },
      { texto: "Estudo e me antecipo a cada cenário.", pontua: ["Alquimistas", "Armeiros"] },
      { texto: "Me concentro e vou direto ao ponto.", pontua: ["Egos", "Armeiros"] },
      { texto: "Procuro apoio e opiniões diferentes.", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Levo tudo o que puder e adapto no caminho.", pontua: ["Modificadores", "Egos"] }
    ]
  },
  {
    texto: "13. Qual dessas atividades você faria por diversão?",
    alternativas: [
      { texto: "Criar um plano só pra testar com amigos.", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Ficar em silêncio criando algo com as mãos.", pontua: ["Egos", "Armeiros"] },
      { texto: "Fazer algo estranho só pra ver a reação.", pontua: ["Ones", "Modificadores"] },
      { texto: "Explorar um lugar novo e esquecer o tempo.", pontua: ["Modificadores", "Invocadores"] },
      { texto: "Observar pessoas e tentar prever ações.", pontua: ["Alquimistas", "Ones"] }
    ]
  },
  {
    texto: "14. Você encontra um portal mágico desconhecido. O que faz?",
    alternativas: [
      { texto: "Analisa os símbolos e a estrutura dele.", pontua: ["Alquimistas", "Armeiros"] },
      { texto: "Entra sem pensar, só pra ver o que acontece.", pontua: ["Ones", "Modificadores"] },
      { texto: "Chama os outros e discute possibilidades.", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Toca nele e vê como ele reage a você.", pontua: ["Modificadores", "Egos"] },
      { texto: "Fica atento ao redor e se posiciona pra reagir.", pontua: ["Egos", "Ones"] }
    ]
  },
  {
    texto: "15. Você está sozinho à noite em uma floresta. Qual pensamento surge primeiro?",
    alternativas: [
      { texto: "Talvez eu não esteja sozinho.", pontua: ["Ones", "Invocadores"] },
      { texto: "Preciso achar um ponto seguro.", pontua: ["Egos", "Armeiros"] },
      { texto: "Tudo ao meu redor pode ser útil.", pontua: ["Modificadores", "Alquimistas"] },
      { texto: "Se algo aparecer, eu improviso.", pontua: ["Modificadores", "Ones"] },
      { texto: "Se fosse um grupo, estaríamos mais seguros.", pontua: ["Invocadores", "Alquimistas"] }
    ]
  },
  {
    texto: "16. Qual dessas atitudes parece mais valiosa pra você?",
    alternativas: [
      { texto: "Agir sem hesitar quando necessário.", pontua: ["Egos", "Modificadores"] },
      { texto: "Ouvir antes de falar.", pontua: ["Alquimistas", "Invocadores"] },
      { texto: "Questionar tudo, mesmo o óbvio.", pontua: ["Ones", "Modificadores"] },
      { texto: "Criar soluções com ferramentas próprias.", pontua: ["Armeiros", "Egos"] },
      { texto: "Se adaptar ao que o grupo precisa.", pontua: ["Invocadores", "Modificadores"] }
    ]
  },
  {
    texto: "17. Uma criatura desconhecida aparece. O que você faz?",
    alternativas: [
      { texto: "Testo uma provocação e observo a reação.", pontua: ["Modificadores", "Ones"] },
      { texto: "Procuro um ponto fraco pra um ataque preciso.", pontua: ["Armeiros", "Egos"] },
      { texto: "Crio distrações e tento atrair aliados.", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Analiso os padrões de comportamento.", pontua: ["Alquimistas", "Ones"] },
      { texto: "Ato rápido e mudo o terreno ao redor.", pontua: ["Modificadores", "Alquimistas"] }
    ]
  },
  {
    texto: "18. O que te deixa mais confortável em momentos difíceis?",
    alternativas: [
      { texto: "Ter um plano escondido mesmo que ninguém veja.", pontua: ["Alquimistas", "Armeiros"] },
      { texto: "Fingir que está tudo bem e mudar o foco.", pontua: ["Modificadores", "Ones"] },
      { texto: "Sentir que alguém confia em mim.", pontua: ["Invocadores", "Egos"] },
      { texto: "Criar um jeito novo de reagir.", pontua: ["Modificadores", "Armeiros"] },
      { texto: "Aceitar que o que vier… eu aguento.", pontua: ["Egos", "Ones"] }
    ]
  },
  {
    texto: "19. Como você lida com algo que sai do controle?",
    alternativas: [
      { texto: "Transformo isso em outra coisa útil.", pontua: ["Modificadores", "Egos"] },
      { texto: "Deixo o caos acontecer e vejo o que sobra.", pontua: ["Ones", "Modificadores"] },
      { texto: "Crio regras novas que se ajustem ao que restou.", pontua: ["Armeiros", "Alquimistas"] },
      { texto: "Peço ajuda ou reforço.", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Observo tudo em silêncio até ver uma chance.", pontua: ["Alquimistas", "Egos"] }
    ]
  },
  {
    texto: "20. O que define seu jeito de existir nesse mundo?",
    alternativas: [
      { texto: "Força silenciosa, como uma rocha viva.", pontua: ["Egos", "Armeiros"] },
      { texto: "Mudança constante, como um vento colorido.", pontua: ["Modificadores", "Ones"] },
      { texto: "Presença firme, mesmo em silêncio.", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Loucuras que fazem sentido só pra mim.", pontua: ["Ones", "Modificadores"] },
      { texto: "Detalhes escondidos, como um mapa vivo.", pontua: ["Alquimistas", "Invocadores"] }
    ]
  }
]



const tipos = ["Egos", "Modificadores", "Ones", "Alquimistas", "Invocadores", "Armeiros"];

function Quiz({ onVoltar }) {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [pontuacoes, setPontuacoes] = useState(() => {
    const inicial = {};
    tipos.forEach(tipo => inicial[tipo] = 0);
    return inicial;
  });
  const [terminou, setTerminou] = useState(false);

  const perguntaAtual = perguntas[indicePergunta];

  function responder(alvos) {
    const novaPontuacao = { ...pontuacoes };
    alvos.forEach(tipo => {
      novaPontuacao[tipo] += 1;
    });
    setPontuacoes(novaPontuacao);

    if (indicePergunta + 1 < perguntas.length) {
      setIndicePergunta(indicePergunta + 1);
    } else {
      setTerminou(true);
    }
  }

  function calcularRanking() {
    const total = Object.values(pontuacoes).reduce((a, b) => a + b, 0);
    return Object.entries(pontuacoes)
      .map(([tipo, pontos]) => ({
        tipo,
        pontos,
        porcentagem: total === 0 ? 0 : Math.round((pontos / total) * 100)
      }))
      .sort((a, b) => b.pontos - a.pontos);
  }

  return (
    <div>
      <button onClick={onVoltar} className="voltar">← Voltar ao menu</button>

      {terminou ? (
        <div>
          <h2>Resultado do Quiz</h2>
          <ul>
            {calcularRanking().map((item, idx) => (
              <li key={idx}>
                <strong>{item.tipo}</strong>: {item.pontos} ponto(s) — {item.porcentagem}%
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Pergunta {indicePergunta + 1} de {perguntas.length}</h2>
          <p>{perguntaAtual.texto}</p>
          {perguntaAtual.alternativas.map((alt, idx) => (
            <button
              key={idx}
              onClick={() => responder(alt.pontua)}
              style={{ display: 'block', margin: '10px 0' }}
            >
              {alt.texto}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;
