import React, { useState } from 'react';

const perguntas = [
  {
    texto: "Qual dessas atitudes mais combina com você?",
    alternativas: [
      { texto: "Transformar a si mesmo para superar obstáculos", pontua: ["Egos", "Modificadores"] },
      { texto: "Mudar o ambiente ao redor com estratégia", pontua: ["Alquimistas", "Armeiros"] },
      { texto: "Acreditar tanto em algo que isso vira real", pontua: ["Ones", "Egos"] },
      { texto: "Criar laços para resolver em grupo", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Inventar algo novo, mesmo que te chamem de louco", pontua: ["Armeiros", "Ones"] },
    ]
  },
  {
    texto: "Como você resolve problemas difíceis?",
    alternativas: [
      { texto: "Foco total e ação direta", pontua: ["Egos", "Armeiros"] },
      { texto: "Improviso criativo e ousado", pontua: ["Modificadores", "Ones"] },
      { texto: "Conversando com outros e unindo ideias", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Planejando bem antes de agir", pontua: ["Alquimistas", "Egos"] },
      { texto: "Mudando algo essencial no ambiente", pontua: ["Alquimistas", "Armeiros"] },
    ]
  },
  {
    texto: "Como você costuma reagir em um ambiente novo?",
    alternativas: [
      { texto: "Age naturalmente, sem precisar se adaptar muito", pontua: ["Egos", "Ones"] },
      { texto: "Muda o clima com presença e criatividade", pontua: ["Modificadores", "Invocadores"] },
      { texto: "Fica observando e analisa tudo primeiro", pontua: ["Alquimistas", "Armeiros"] },
      { texto: "Se conecta com alguém e forma vínculos", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Já pensa como poderia transformar o lugar", pontua: ["Armeiros", "Ones"] },
    ]
  },
  {
    texto: "Qual dessas frases te representa melhor?",
    alternativas: [
      { texto: "Sou o motor por trás do meu próprio avanço", pontua: ["Egos", "Armeiros"] },
      { texto: "Sou o caos necessário para algo novo nascer", pontua: ["Ones", "Modificadores"] },
      { texto: "Observo primeiro, ajo depois", pontua: ["Alquimistas", "Egos"] },
      { texto: "Sou quem faz todos se sentirem parte de algo", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Crio o impossível porque me recuso ao comum", pontua: ["Armeiros", "Ones"] },
    ]
  },
  {
    texto: "Quando precisa tomar decisões difíceis, você...",
    alternativas: [
      { texto: "Faz o que é preciso, mesmo que sozinho", pontua: ["Egos", "Armeiros"] },
      { texto: "Tenta uma abordagem nova e inusitada", pontua: ["Ones", "Modificadores"] },
      { texto: "Conversa com todos e adapta o caminho", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Analisa prós e contras com cuidado", pontua: ["Alquimistas", "Egos"] },
      { texto: "Inventa uma solução com o que tem à mão", pontua: ["Armeiros", "Alquimistas"] },
    ]
  },
  {
    texto: "No meio do caos, o que você faz?",
    alternativas: [
      { texto: "Cria ordem com lógica e cálculo", pontua: ["Alquimistas", "Egos"] },
      { texto: "Traz leveza com atitude criativa", pontua: ["Modificadores", "Invocadores"] },
      { texto: "Abraça o caos e usa ele a seu favor", pontua: ["Ones", "Modificadores"] },
      { texto: "Garante que todos estejam bem e alinhados", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Constrói algo útil em meio ao desastre", pontua: ["Armeiros", "Ones"] },
    ]
  },
  {
    texto: "Quando sente que está travado...",
    alternativas: [
      { texto: "Se isola e se reconstrói aos poucos", pontua: ["Armeiros", "Alquimistas"] },
      { texto: "Provoca uma mudança radical no ambiente", pontua: ["Modificadores", "Egos"] },
      { texto: "Cria algo absurdo só pra quebrar a lógica", pontua: ["Ones", "Modificadores"] },
      { texto: "Conversa com alguém e reorganiza suas ideias", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Faz algo com as mãos até clarear a mente", pontua: ["Armeiros", "Invocadores"] },
    ]
  },
  {
    texto: "Com qual dessas imagens você mais se identifica?",
    alternativas: [
      { texto: "Uma faísca acendendo algo grande", pontua: ["Modificadores", "Ones"] },
      { texto: "Um martelo moldando uma nova forma", pontua: ["Armeiros", "Egos"] },
      { texto: "Um mapa sendo traçado com cuidado", pontua: ["Alquimistas", "Egos"] },
      { texto: "Uma rede sendo formada entre pessoas", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Uma realidade se partindo ao meio", pontua: ["Ones", "Armeiros"] },
    ]
  },
  {
    texto: "Seu melhor momento acontece quando...",
    alternativas: [
      { texto: "Alguém precisa de você sem pedir", pontua: ["Invocadores", "Egos"] },
      { texto: "Tudo parece impossível até você intervir", pontua: ["Ones", "Modificadores"] },
      { texto: "Você antecipa o problema e evita o erro", pontua: ["Alquimistas", "Egos"] },
      { texto: "Você reinventa algo que parecia pronto", pontua: ["Modificadores", "Armeiros"] },
      { texto: "Você une pessoas que nem sabiam que se completavam", pontua: ["Invocadores", "Alquimistas"] },
    ]
  },
  {
    texto: "Quando tem uma ideia nova, você...",
    alternativas: [
      { texto: "Cria mesmo que pareça impossível", pontua: ["Ones", "Armeiros"] },
      { texto: "Testa ela no mundo real o mais rápido possível", pontua: ["Modificadores", "Egos"] },
      { texto: "Compartilha com quem pode ajudar a expandi-la", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Analisa os impactos e consequências", pontua: ["Alquimistas", "Egos"] },
      { texto: "Refina aos poucos, sozinho", pontua: ["Armeiros", "Alquimistas"] },
    ]
  },
  {
    texto: "Quando algo inesperado acontece, você...",
    alternativas: [
      { texto: "Se adapta e continua como se fosse parte do plano", pontua: ["Modificadores", "Invocadores"] },
      { texto: "Observa os padrões e reorganiza tudo", pontua: ["Alquimistas", "Egos"] },
      { texto: "Cria uma solução criativa na hora", pontua: ["Ones", "Modificadores"] },
      { texto: "Garante que ninguém seja deixado para trás", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Silenciosamente começa a construir algo novo", pontua: ["Armeiros", "Egos"] },
    ]
  },
  {
    texto: "Seu maior ponto forte está em...",
    alternativas: [
      { texto: "Criatividade no meio do caos", pontua: ["Modificadores", "Ones"] },
      { texto: "Capacidade de guiar sem dominar", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Autonomia total mesmo sob pressão", pontua: ["Egos", "Armeiros"] },
      { texto: "Transformar ideias em matéria", pontua: ["Armeiros", "Alquimistas"] },
      { texto: "Romper com tudo e criar novas regras", pontua: ["Ones", "Modificadores"] },
    ]
  },
  {
    texto: "O que você faz quando está sozinho?",
    alternativas: [
      { texto: "Conserta ou melhora algo", pontua: ["Armeiros", "Egos"] },
      { texto: "Cria teorias, ideias ou realidades alternativas", pontua: ["Ones", "Alquimistas"] },
      { texto: "Pensa em como mudar o mundo ao seu redor", pontua: ["Modificadores", "Ones"] },
      { texto: "Reflete sobre os outros e como ajudá-los", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Organiza os próximos passos com precisão", pontua: ["Alquimistas", "Egos"] },
    ]
  },
  {
    texto: "Como você lida com fracassos?",
    alternativas: [
      { texto: "Usa como combustível para inventar algo melhor", pontua: ["Modificadores", "Armeiros"] },
      { texto: "Tira um aprendizado estratégico", pontua: ["Alquimistas", "Egos"] },
      { texto: "Faz piada e tenta de novo por outro caminho", pontua: ["Modificadores", "Ones"] },
      { texto: "Busca apoio ou compartilha com alguém", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Silencia e reconstrói no seu próprio ritmo", pontua: ["Armeiros", "Ones"] },
    ]
  },
  {
    texto: "Você se destaca quando precisa...",
    alternativas: [
      { texto: "Liderar pelo exemplo, sem falar muito", pontua: ["Egos", "Armeiros"] },
      { texto: "Propor ideias novas e estranhas", pontua: ["Ones", "Modificadores"] },
      { texto: "Unir pontos diferentes em um plano", pontua: ["Alquimistas", "Invocadores"] },
      { texto: "Mudar a energia de um ambiente", pontua: ["Modificadores", "Invocadores"] },
      { texto: "Criar algo funcional a partir do zero", pontua: ["Armeiros", "Alquimistas"] },
    ]
  },
  {
    texto: "Na vida, você se sente mais como...",
    alternativas: [
      { texto: "Uma faísca esperando explodir em luz", pontua: ["Modificadores", "Ones"] },
      { texto: "Uma engrenagem essencial que ninguém percebe", pontua: ["Egos", "Armeiros"] },
      { texto: "Um elo invisível que une os outros", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Uma força silenciosa que observa e planeja", pontua: ["Alquimistas", "Egos"] },
      { texto: "Um inventor de mundos que ninguém entende ainda", pontua: ["Ones", "Armeiros"] },
    ]
  },
  {
    texto: "Quando o grupo se perde, você tende a...",
    alternativas: [
      { texto: "Assumir a frente com confiança", pontua: ["Egos", "Modificadores"] },
      { texto: "Criar algo que devolva o foco de todos", pontua: ["Modificadores", "Armeiros"] },
      { texto: "Se manter firme e escutar até as emoções passarem", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Pensar em um plano que ninguém viu ainda", pontua: ["Alquimistas", "Ones"] },
      { texto: "Fazer do caos um novo ponto de partida", pontua: ["Ones", "Modificadores"] },
    ]
  },
  {
    texto: "Na prática, você gosta mais de...",
    alternativas: [
      { texto: "Atuar com autonomia total", pontua: ["Egos", "Armeiros"] },
      { texto: "Surpreender com novas possibilidades", pontua: ["Modificadores", "Ones"] },
      { texto: "Construir algo com precisão", pontua: ["Armeiros", "Alquimistas"] },
      { texto: "Cuidar do ritmo e das conexões do grupo", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Enxergar o que outros não veem e manipular isso", pontua: ["Alquimistas", "Ones"] },
    ]
  },
  {
    texto: "O que mais te motiva no cotidiano?",
    alternativas: [
      { texto: "Superar meus próprios limites", pontua: ["Egos", "Ones"] },
      { texto: "Criar algo que nunca existiu", pontua: ["Modificadores", "Armeiros"] },
      { texto: "Ver as pessoas em sintonia", pontua: ["Invocadores", "Alquimistas"] },
      { texto: "Resolver o que está errado de forma prática", pontua: ["Egos", "Alquimistas"] },
      { texto: "Desafiar a lógica e ver o que acontece", pontua: ["Ones", "Modificadores"] },
    ]
  },
  {
    texto: "Qual dessas frases você mais sente que é sua?",
    alternativas: [
      { texto: "Eu mudo para que tudo funcione", pontua: ["Modificadores", "Egos"] },
      { texto: "Eu crio o que ninguém imaginou", pontua: ["Ones", "Armeiros"] },
      { texto: "Eu organizo o caos sem alarde", pontua: ["Alquimistas", "Egos"] },
      { texto: "Eu estou onde alguém precisa de mim", pontua: ["Invocadores", "Modificadores"] },
      { texto: "Eu entendo antes de agir", pontua: ["Alquimistas", "Invocadores"] },
    ]
  }
];



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
