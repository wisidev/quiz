const objetosNativosDoJavaScript = [
  {
    pergunta:
      "Os objetos nativos estão presentes diretamente na linguagem JS, oferecendo funções e constantes de grande utilidade para o programador. A respeito desses objetos, assinale a alternativa verdadeira:",
    opcoes: [
      "Não apresentam construtores.",
      "Não podem ser modificados.",
      "São definidos pelo usuário.",
      "Servem de base para os demais objetos do código.",
      "São os mesmos desde a primeira versão do ECMAScript.",
    ],
    correta: 3,
  },
  {
    pergunta:
      "Nem todos os objetos nativos apresentam construtores ou propriedades acessíveis. Qual das alternativas a seguir representa um código válido na manipulação de objetos nativos?",
    opcoes: [
      "new Math(3.14159)",
      "Math().PI",
      "Date.now",
      "new Date(86400)",
      "Date.milissenconds = 86400",
    ],
    correta: 3,
  },
  {
    pergunta:
      "Qual das alternativas representa corretamente a expressão em JavaScript para calcular a quantidade utilizando funções matemáticas nativas?",
    imagem: "./assets/img/5-3.png",
    opcoes: [
      "const quantidade = (Math.sqrt(Mat.pow(C, 2) + Math.pow(I*C, 2))*L)/T",
      "const quantidade = (Math.sqrt(C^2 + (I*C)^2)*L)/T",
      "const quantidade = Math.div((Math.sqrt(Mat.pow(C, 2) + Math.pow(I.C, 2)).L),T)",
      "const quantidade = (Math.sqrt(Mat.pow(2, C) + Math.pow(2, I*C))*L)/T",
      "const quantidade = {Math.sqrt[Mat.pow(C, 2) + Math.pow(I*C, 2)]*L}/T",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Um site deve fazer a simulação de um investimento e, para tanto, precisa calcular a quantidade de dias entre as datas de aplicação e resgate. Assinale a alternativa que permite obter, a partir de dois objetos Date, data1 e data2, a quantidade de dias entre eles.",
    opcoes: [
      "data1 - data2",
      "data1.Subtract(data2)",
      "(data1.getDate() - data2.getDate()).Days",
      "(data1.getTime() - data2.getTime())/(24*3600)",
      "(data1.getTime() - data2.getTime())/86400000",
    ],
    correta: 4,
  },
];
