const perguntas = [
  ...analisarECompreenderAUtilizacaoDoBancoDeDadosNoSQL,
  ...classificacaoDosBancosDeDadosNaoRelacionais,
  ...historiaDosBancosDeDadosNaoRelacionais,
  ...modeloRelaciona,
  ...projetoDeBancoDeDados,
];

let perguntasEmbaralhadas = [];
let indiceAtual = 0;

function embaralharPerguntas() {
  // Faz uma cópia do array original antes de embaralhar
  perguntasEmbaralhadas = [...perguntas];
  for (let i = perguntasEmbaralhadas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [perguntasEmbaralhadas[i], perguntasEmbaralhadas[j]] = [
      perguntasEmbaralhadas[j],
      perguntasEmbaralhadas[i],
    ];
  }
}

function mostrarPergunta() {
  const atual = perguntasEmbaralhadas[indiceAtual];
  document.getElementById("pergunta").textContent = atual.pergunta;
  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  atual.opcoes.forEach((opcao, index) => {
    const btn = document.createElement("button");
    btn.textContent = opcao;
    btn.onclick = () => verificarResposta(index, btn);
    opcoesDiv.appendChild(btn);
  });

  // Contador:
  document.getElementById("contador").textContent = `Pergunta ${
    indiceAtual + 1
  } de ${perguntasEmbaralhadas.length}`;
}

function verificarResposta(indice, botaoClicado) {
  const correta = perguntasEmbaralhadas[indiceAtual].correta;
  const botoes = document.querySelectorAll("#opcoes button");

  botoes.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correta) btn.classList.add("correta");
    else if (btn === botaoClicado) btn.classList.add("errada");
  });
}

function proximaPergunta() {
  if (indiceAtual < perguntasEmbaralhadas.length - 1) {
    indiceAtual++;
    mostrarPergunta();
  } else {
    document.getElementById("quiz-container").innerHTML = `
      <h2>Fim do quiz!</h2>
      <button onclick="reiniciarQuiz()">Reiniciar Quiz</button>
    `;
  }
}

function reiniciarQuiz() {
  indiceAtual = 0;
  embaralharPerguntas();
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <div id="pergunta"></div>
    <div id="opcoes"></div>
    <button id="proxima" onclick="proximaPergunta()">Próxima</button>
  `;
  mostrarPergunta();
}

// Inicializa ao carregar a página
embaralharPerguntas();
mostrarPergunta();
