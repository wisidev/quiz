// Banco de perguntas
const perguntas = [
  /* Banco de Dados
  ...analisarECompreenderAUtilizacaoDoBancoDeDadosNoSQL,
  ...classificacaoDosBancosDeDadosNaoRelacionais,
  ...historiaDosBancosDeDadosNaoRelacionais,
  ...modeloRelaciona,
  ...projetoDeBancoDeDados,
  */

  /* Website Front End
  ...aplicacaoDeLayoutHTMLMaisCSS,
  ...comportamentoComJavaScript,
  ...criacaoDePaginasWebComHTML5,
  ...criacaoEFormatacaoDePaginasWebComCSS,
  ...criacaoEFormatacaoDePaginasWebComHTML,
  ...objetosNativosDoJavaScript,
  */

  /* Aplicativo Mobile
  ...appMobile,
  */

  /* Banco de Dados - Segundo Período */
  ...mineracaoDeSubgrafos,
  ...introducaoAHadoop,
];

// Variáveis de controle
let perguntasEmbaralhadas = []; // Guarda as perguntas embaralhadas
let indiceAtual = 0; // Qual pergunta está sendo exibida
let respondeu = false; // Controle para saber se respondeu

// Função que embaralha as perguntas
function embaralharPerguntas() {
  perguntasEmbaralhadas = [...perguntas]; // Faz cópia
  for (let i = perguntasEmbaralhadas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [perguntasEmbaralhadas[i], perguntasEmbaralhadas[j]] = [
      perguntasEmbaralhadas[j],
      perguntasEmbaralhadas[i],
    ];
  }
}

// Mostra a pergunta atual e as opções
function mostrarPergunta() {
  respondeu = false; // Reset para nova pergunta

  const atual = perguntasEmbaralhadas[indiceAtual];
  document.getElementById("pergunta").textContent = atual.pergunta;

  // Exibe a imagem, se tiver
  const imagemDiv = document.getElementById("imagem");
  if (atual.imagem) {
    imagemDiv.innerHTML = `<img src="${atual.imagem}" alt="Imagem da pergunta" style="max-width: 100%; height: auto;" />`;
  } else {
    imagemDiv.innerHTML = "";
  }

  // Limpa e insere novas opções
  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  atual.opcoes.forEach((opcao, index) => {
    const btn = document.createElement("button");
    btn.textContent = opcao;
    btn.onclick = () => verificarResposta(index, btn);
    opcoesDiv.appendChild(btn);
  });

  // Contador de progresso
  document.getElementById("contador").textContent = `Pergunta ${
    indiceAtual + 1
  } de ${perguntasEmbaralhadas.length}`;

  ocultarMensagem(); // Oculta mensagem de aviso (se tiver)
}

// Verifica se a resposta está correta
function verificarResposta(indice, botaoClicado) {
  const correta = perguntasEmbaralhadas[indiceAtual].correta;
  const botoes = document.querySelectorAll("#opcoes button");

  botoes.forEach((btn, i) => {
    btn.disabled = true; // Desativa todos os botões após resposta

    if (i === correta) btn.classList.add("correta"); // Marca correta
    else if (btn === botaoClicado) btn.classList.add("errada"); // Marca errada, se clicou errado
  });

  respondeu = true; // Marca como respondido
  ocultarMensagem(); // Oculta qualquer aviso
}

// Função para avançar para a próxima pergunta
function proximaPergunta() {
  // Se não respondeu, mostra aviso
  if (!respondeu) {
    exibirMensagem("Por favor, selecione uma alternativa antes de avançar.");
    return;
  }

  if (indiceAtual < perguntasEmbaralhadas.length - 1) {
    indiceAtual++;
    mostrarPergunta();
  } else {
    // Fim do quiz
    document.getElementById("quiz-container").innerHTML = `
      <h2>Fim do quiz!</h2>
      <button onclick="reiniciarQuiz()">Reiniciar Quiz</button>
    `;
  }
}

// Reinicia o quiz
function reiniciarQuiz() {
  indiceAtual = 0;
  embaralharPerguntas();

  // Restaura estrutura do quiz
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <div id="contador"></div>
    <div id="pergunta"></div>
    <div id="imagem"></div>
    <div id="opcoes"></div>
    <button id="proxima" onclick="proximaPergunta()">Próxima</button>
  `;

  mostrarPergunta();
}

// Função que exibe mensagem de aviso
function exibirMensagem(msg) {
  let aviso = document.getElementById("aviso");
  if (!aviso) {
    aviso = document.createElement("div");
    aviso.id = "aviso";
    aviso.style.color = "orange";
    aviso.style.marginTop = "10px";
    document.querySelector("#quiz-container").appendChild(aviso);
  }
  aviso.textContent = msg;
}

// Oculta a mensagem de aviso
function ocultarMensagem() {
  let aviso = document.getElementById("aviso");
  if (aviso) aviso.textContent = "";
}

// Inicializa o quiz ao carregar a página
embaralharPerguntas();
mostrarPergunta();

// Atalhos de teclado
document.addEventListener("keydown", function (event) {
  // ENTER -> vai para a próxima pergunta
  if (event.key === "Enter") {
    proximaPergunta();
  }

  // Teclas de 1 a 5 -> selecionam alternativas
  if (["1", "2", "3", "4", "5"].includes(event.key)) {
    let index = parseInt(event.key) - 1; // Ex.: '1' vira 0
    let opcoes = document.querySelectorAll("#opcoes button");
    if (opcoes[index]) {
      opcoes[index].click(); // Simula o clique
    }
  }
});
