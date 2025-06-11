// Banco de perguntas
const perguntas = [
  /* Website Front End - Primeiro Período
  ...aplicacaoDeLayoutHTMLMaisCSS,
  ...comportamentoComJavaScript,
  ...criacaoDePaginasWebComHTML5,
  ...criacaoEFormatacaoDePaginasWebComCSS,
  ...criacaoEFormatacaoDePaginasWebComHTML,
  ...objetosNativosDoJavaScript,
  */

  // Website Front End - Segundo Período
  ...sintaxe_json,
  ...tipos_de_dados_json,
  ...manipulacao_de_objetos_json,
  ...seguranca_em_json,
  ...javascript_xmlhttprequest_e_api_web,
  ...json_ajax,
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
  respondeu = false;

  const atual = perguntasEmbaralhadas[indiceAtual];
  document.getElementById("pergunta").textContent = atual.pergunta;

  // Exibe imagem, se houver
  const imagemDiv = document.getElementById("imagem");
  if (atual.imagem) {
    imagemDiv.innerHTML = `<img src="${atual.imagem}" alt="Imagem da pergunta" style="max-width: 100%; height: auto;" />`;
  } else {
    imagemDiv.innerHTML = "";
  }

  // Exibe complemento, se houver
  const complementoDiv = document.getElementById("complemento");
  complementoDiv.textContent = atual.complemento || "";

  // Limpa opções anteriores
  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  // Verifica se a pergunta usa alternativas com imagem
  if (atual.alternativas) {
    atual.alternativas.forEach((alternativa, index) => {
      const btn = document.createElement("button");
      btn.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center;">
          <img src="${alternativa.imagem}" alt="Alternativa ${alternativa.id}" style="max-width: 100%; height: auto; border-radius: 5px;" />
        </div>
      `;
      btn.onclick = () => verificarResposta(index, btn);
      opcoesDiv.appendChild(btn);
    });
  }

  // Verifica se a pergunta usa opções com texto
  else if (atual.opcoes) {
    atual.opcoes.forEach((opcao, index) => {
      const btn = document.createElement("button");
      btn.textContent = opcao;
      btn.onclick = () => verificarResposta(index, btn);
      opcoesDiv.appendChild(btn);
    });
  }

  // Atualiza contador
  document.getElementById("contador").textContent = `Pergunta ${
    indiceAtual + 1
  } de ${perguntasEmbaralhadas.length}`;

  ocultarMensagem();
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
      <div class="final-quiz">
        <h2>Fim do quiz!</h2>
        <button onclick="reiniciarQuiz()" class="btn-reiniciar">Reiniciar Quiz</button>
      </div>
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
    <br />
    <div id="pergunta"></div>
    <div id="imagem"></div>
    <div id="complemento"></div>
    <div id="opcoes"></div>
    <button class="proxima" onclick="proximaPergunta()">Próxima</button>
  `;

  mostrarPergunta();
}

// Função que exibe mensagem de aviso
function exibirMensagem(msg) {
  let aviso = document.getElementById("aviso");
  if (!aviso) {
    aviso = document.createElement("div");
    aviso.id = "aviso";
    aviso.style.color = "#ff4500";
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
