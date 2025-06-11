const manipulacao_de_objetos_json = [
  {
    pergunta:
      "JSON é um formato para codificação de dados em formato legível por humanos para armazenamento e envio em uma rede. Embora tenha começado em JavaScript, é usado em todas as linguagens de programação modernas.\n\nEm relação às características do JSON, assinale a alternativa correta.",
    opcoes: [
      "Ainda que a maioria das linguagens consiga utilizar, o JSON acaba tendo seu formato modificado para cada uma.",
      "Os dados são geralmente separados por vírgulas, e os textos dos dados são colocados entre aspas duplas.",
      "JSON contém uma biblioteca padrão de objetos, como Array, Date e Math, mas não tem suporte para matrizes.",
      "Um arquivo JSON tem uma extensão de “.js” e, em um formato baseado em texto, pode ser visualizado apenas no navegador.",
      "A sintaxe JSON oferece análise fácil de dados, mas sua implementação é considerada mais lenta que o XML.",
    ],
    correta: 1,
  },
  {
    pergunta:
      "O JSON surgiu como um dos métodos de intercâmbio de dados mais populares. Ele tem várias vantagens sobre o XML que o ajudam a substituir o XML como um formato de transferência de dados mais popular.\n\nEntre elas, é possível citar:\n\nI. JSON é menos leve e mais rápido que o XML;\nII. JSON tem tipos de objetos, mas XML não define objetos como tipos;\nIII. os dados JSON podem ser facilmente acessados como um objeto JSON usando JavaScript.\n\nEstá correto apenas o que se afirma em:",
    opcoes: ["I.", "I e II.", "I e III.", "III.", "II e III."],
    correta: 4,
  },
  {
    pergunta:
      "O método JSON.parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string. Uma função reviver opcional pode ser fornecida para executar uma transformação no objeto que será retornado (MDN WEB DOCS, c2022).\n\nAssinale a alternativa que apresenta corretamente um trecho de código declarando uma string para conversão JSON, usando a forma padrão do parse em JavaScript para JSON.\n\nSelecione a resposta:",
    opcoes: [
      'string json = ‘{ "Marca": "Hyundai", "Nome": "Verna", "Cor": “Vermelho” }’ ;\nvar obj = JSON.parse(json).',
      'string json = ‘{ "Marca" => "Hyundai", "Nome" => "Verna", "Cor" => “Vermelho” }’ ;\nvar obj = JSON.parse(json).',
      'var json = ‘{ "Marca" => "Hyundai", "Nome" => "Verna", "Cor" => “Vermelho” }’ ;\nvar obj = JSON.parseString(json).',
      'string json = ‘{ "Marca": "Hyundai", "Nome": "Verna", "Cor": “Vermelho” }’ ;\nvar obj = JSON.parse(json.elements).',
      'const json = ‘{ "Marca": "Hyundai"; "Nome": "Verna"; "Cor": “Vermelho” }’ ;\nvar obj = JSON.parse(json).',
    ],
    correta: 0,
    comentarios: [
      'A declaração deve ser realizada de forma que os objetos fiquem em chaves, seus dados separados por vírgula e seus textos (chave + valor) fiquem entre aspas duplas separados por dois pontos (:).\n\nO parse trabalha de forma bem simples, obtém-se a variável string e, por meio do método JSON.parse(), realiza-se o processo de parse.\n\nO trecho string json = ‘{ "Marca" => "Hyundai", "Nome" => "Verna", "Cor" => “Vermelho” }’ ;\nvar obj = JSON.parse(json);\nutiliza o símbolo “=>” como separador entre nome/valor em vez de “:”.\n\nO trecho var json = ‘{ "Marca" => "Hyundai", "Nome" => "Verna", "Cor" => “Vermelho” }’ ;\nvar obj = JSON.parseString(json);\nutiliza o símbolo “=>” como separador entre nome/valor em vez de “:” e o nome do método deveria ser JSON.parse().\n\nO trecho string json = ‘{ "Marca": "Hyundai", "Nome": "Verna", "Cor": “Vermelho” }’ ;\nvar obj = JSON.parse(json.elements);\nutiliza o método JSON.parse() com um parâmetro incorreto “json.elements” que não existe na API JavaScript.\n\nO trecho const json = ‘{ "Marca": "Hyundai"; "Nome": "Verna"; "Cor": “Vermelho” }’ ;\nvar obj = JSON.parse(json);\nutiliza o símbolo “;” como separador de pares nome/valor ao contrário do símbolo “,”.',
    ],
  },
  {
    pergunta:
      "Para o transporte e a comunicação de dados de um sistema para outro, um desenvolvedor foi solicitado para transformar um arquivo CSV, gerado em um sistema nativo no servidor, para o formato JSON, suportado pela aplicação desenvolvida dentro da empresa.\n\nNesse contexto, considere o seguinte arquivo CSV:\n\nnome;saldo\n\nCarlos Henrique;2000\nBernardo Santos;5300\nPatrícia Souza;54321\n\nO trecho de arquivo JSON correto que tem a mesma informação que o arquivo CSV apresentado é:",
    alternativas: [
      { imagem: "./assets/img/a.png" },
      { imagem: "./assets/img/b.png" },
      { imagem: "./assets/img/c.png" },
      { imagem: "./assets/img/d.png" },
      { imagem: "./assets/img/e.png" },
    ],
    correta: 1,
  },
  {
    pergunta:
      "Existem funções, APIs e parâmetros que facilitam a serialização de objetos JSON.\n\nObserve o código mostrado a seguir:\n\n",
    imagem: "./assets/img/fe2-3-5.png",
    complemento:
      "\nConsidere que o código está rodando em uma versão atual e compatível com as bibliotecas usadas. Dessa forma, a saída correta relacionada à execução do código será:",
    opcoes: [
      "o texto [object Object] exibido no console de seu navegador.",
      "o texto [object Object] exibido na janela de seu navegador.",
      'o texto {"nome":"Daniel","idade":30,"cidade":"São josé dos Campos"} exibido no console de seu navegador.',
      'o texto: {"nome":"Daniel","idade":30,"cidade":"São josé dos Campos"} exibido na janela de seu navegador.',
      "o texto: Daniel, 30, São josé dos Campos exibido na janela de seu navegador.",
    ],
    correta: 3,
  },
];
